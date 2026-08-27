# users/urls.py

from django.urls import path
from userauths import views

urlpatterns = [
    path('auth/register/', views.RegisterView.as_view(), name = 'register'),
    path('auth/login/', views.LoginView.as_view(), name='login'),
    path('auth/logout/', views.LogoutView.as_view(), name="logout"),
    path('auth/profile/', views.UserView.as_view(), name='user'),  #endpoint to get user details

    
    path('auth/token/refresh', views.CookieTokenRefreshView.as_view(), name='token_refresh'),

]