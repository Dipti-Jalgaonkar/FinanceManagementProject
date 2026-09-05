# users/urls.py

from django.urls import path
from core import views

urlpatterns = [
    path('upload/', views.FileUploadView.as_view()),
    path('verify/', views.VerificationAPIView.as_view())
]