from django.shortcuts import render

# Create your views here.
# Import default Django storage system (handles saving files)
from django.core.files.storage import default_storage
# Utility to safely fetch a model instance or raise a 404 if not found
from django.shortcuts import get_object_or_404
# Built-in helper to check hashed passwords (compares raw vs. hashed)
from django.contrib.auth.hashers import check_password
# Database transaction helper (ensures atomic operations, rollback on errors)
from django.db import transaction
# Advanced query helpers: F allows field references, Q allows OR/AND filters
from django.db.models import F, Q
# Import Django project settings (for configs like Stripe API keys)
from django.conf import settings

# Django REST Framework core tools
from rest_framework.views import APIView                         # Base class for API endpoints
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.parsers import MultiPartParser, FormParser   # For handling file uploads (form-data)
from rest_framework.response import Response                     # Used to send API responses
from rest_framework import status                                # HTTP status codes (200, 400, 201, etc.)
from rest_framework import permissions                          # Shortcut import for permissions
from rest_framework.pagination import PageNumberPagination       # Pagination base class

# Extra imports
from decimal import Decimal   # Work with precise numbers (money, etc.)
import uuid                   # Generate unique IDs
import stripe                 # Stripe payment library
from datetime import date     # Handle dates

# Import local serializers and models
from core import serializers as core_serializers
from userauths import serializers as userauths_serializers
from core import models as core_models
from userauths import models as userauths_models

# Set Stripe secret key from settings (so we can use Stripe API)
stripe.api_key = settings.STRIPE_SECRET_KEY

class StandardPagination(PageNumberPagination):
    page_size = 20
    paze_size_query_param = "page_size"
    max_page_size = 100

class FileUploadView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        serializer = core_serializers.FileUploadSerializer(data = request.data)

        if serializer.is_valid():
            uploaded_file = serializer.validated_data['file']
            file_name = default_storage.save(uploaded_file.name, uploaded_file)
            file_url = request.build_uri(default_storage.url(file_name))

            return Response(file_url, status= status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class VerificationAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        payment_id = request.data.get("paymentId")
        amount = request.data.get("amount")
        user = request.user

        if not all([payment_id, amount]):
            return Response (
                {"error": "Missing required payment data"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            intent = stripe.PaymentIntent.create(
                amount = int(amount * 100),
                currency="usd",
                payment_method=payment_id,
                confirm=True,
                automatic_payment_methods={"enabled": True, "allow_redirects": "never"},
                description=f"Wallet funding for {user.username}"
            )

            if intent.status != "succeeded":
                return Response(
                    {"error": "Stripe payment not successful"},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            transaction_id = intent.id
        except stripe.error.CardError as e:
            return Response(
                {"error": f"Stripe card error: {e.user_message}"},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": f"Stripe verification error: {str(e)}"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        wallet, created = core_models.Wallet.objects.get_or_create(user=user)
        wallet.balance += amount
        wallet.save()

        transaction = core_models.Transaction.objects.create(
            wallet=wallet,
            transaction_type=core_models.Transaction.TransactionType.DEPOSIT, # deposit type
            amount=amount,
            status=core_models.Transaction.TransactionStatus.SUCCESSFUL,     # mark successful
            receiver=user,                                                   # who got the money
            external_reference=transaction_id,                               # Stripe payment reference
        )

        # Create a notification record so user sees "Deposit Successful"
        core_models.Notification.objects.create(
            user=user,
            transaction=transaction,
            status=core_models.Notification.TransactionType.DEPOSIT,
            title="New Deposit From Stripe",
            message=f"You funded your wallet with {amount} from stripe",
        )

        # Final response: tell frontend deposit worked, send new balance
        return Response(
            {
                "message": "Wallet funding successfull",
                "wallet_balance": wallet.balance
            },
            status=status.HTTP_200_OK
        )