from django.contrib import admin
from django.urls import path,include
from .views import SignupView,LoginView,UserProfileView,UserChangePasswordView,PasswordResetMailView,ResetPasswordView


urlpatterns = [
    
    path('signup/',SignupView.as_view(),name="SignupUser"),
    path('login/',LoginView.as_view(),name="LoginUser"),
    path('profile/',UserProfileView.as_view(),name="ProfileView"),
    path('change-password/',UserChangePasswordView.as_view(),name="ChangePassword"),
    path('sendresetpasswordemail/',PasswordResetMailView.as_view(),name="sendresetmail"),
    path('resetpassword/<uid>/<token>',ResetPasswordView.as_view(),name='ResetPassword')

]