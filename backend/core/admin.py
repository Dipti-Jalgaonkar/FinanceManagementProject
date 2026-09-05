from django.contrib import admin
from django.db.models import Sum
from .models import (
     Wallet, Transaction, Beneficiary, 
     Notification, SavingsGoal
)

# Inlines are a powerful way to show related models on the same page.
class TransactionInline(admin.TabularInline):
    """Shows recent transactions directly on the Wallet page."""
    model = Transaction
    extra = 0  # Don't show any extra empty forms for new transactions
    fields = ('timestamp', 'transaction_type', 'amount', 'status')
    readonly_fields = ('timestamp', 'transaction_type', 'amount', 'status')
    ordering = ('-timestamp',)
    verbose_name_plural = "Recent Transactions"

    def has_add_permission(self, request, obj=None):
        return False # Prevent adding transactions from the wallet page

    def has_delete_permission(self, request, obj=None):
        return False # Prevent deleting transactions

class SavingsGoalInline(admin.TabularInline):
    """Shows savings goals directly on the Wallet page."""
    model = SavingsGoal
    extra = 0
    fields = ('name', 'target_amount', 'current_amount', 'progress_percentage')
    readonly_fields = ('progress_percentage',)
    verbose_name_plural = "Savings Goals"

@admin.register(Wallet)
class WalletAdmin(admin.ModelAdmin):
    """Admin configuration for the Wallet model."""
    list_display = ('user', 'wallet_id', 'balance', 'created_at')
    # search_fields = ('user__username', 'user__email', 'wallet_id')
    # list_filter = ('created_at',)
    # readonly_fields = ('wallet_id', 'balance', 'created_at', 'updated_at')
    # list_select_related = ('user',) # Optimizes query to fetch user details
    # inlines = [TransactionInline, SavingsGoalInline]

    # fieldsets = (
    #     (None, {
    #         'fields': ('user', 'wallet_id', 'balance')
    #     }),
    #     ('Timestamps', {
    #         'fields': ('created_at', 'updated_at'),
    #         'classes': ('collapse',) # Make this section collapsible
    #     }),
    # )

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    """Admin configuration for the Transaction model."""
    list_display = ('reference', 'wallet_user', 'transaction_type', 'amount', 'status', 'timestamp')
    search_fields = ('reference', 'wallet__user__username', 'wallet__user__email', 'external_reference')
    list_filter = ('transaction_type', 'status', 'timestamp')
    readonly_fields = ('reference', 'timestamp')
    list_select_related = ('wallet__user',)

    fieldsets = (
        ('Transaction Details', {
            'fields': ('reference', 'wallet', 'transaction_type', 'amount', 'status')
        }),
        ('References', {
            'fields': ('external_reference',)
        }),
        ('Transfer Details', {
            'fields': ('sender', 'receiver'),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('timestamp',),
            'classes': ('collapse',)
        }),
    )

    def wallet_user(self, obj):
        return obj.wallet.user
    wallet_user.short_description = 'User'

@admin.register(Beneficiary)
class BeneficiaryAdmin(admin.ModelAdmin):
    """Admin configuration for the Beneficiary model."""
    list_display = ('user', 'beneficiary_user', 'created_at')
    search_fields = ('user__username', 'beneficiary_user__username')
    list_filter = ('created_at',)


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    """Admin configuration for the Notification model."""
    list_display = ('user', 'title', 'is_read', 'timestamp')
    search_fields = ('user__username', 'title', 'message')
    list_filter = ('is_read', 'timestamp')
    list_editable = ('is_read',) # Allow editing the 'read' status from the list view

@admin.register(SavingsGoal)
class SavingsGoalAdmin(admin.ModelAdmin):
    """Admin configuration for the SavingsGoal model."""
    list_display = ('wallet_user', 'name', 'target_amount', 'current_amount', 'progress_percentage', 'target_date')
    search_fields = ('wallet__user__username', 'name')
    list_filter = ('target_date',)

    def wallet_user(self, obj):
        return obj.wallet.user
    wallet_user.short_description = 'User'