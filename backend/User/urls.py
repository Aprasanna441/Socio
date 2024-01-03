from django.contrib import admin
from django.urls import path,include
from .views import SignupView,LoginView,UserProfileView,UserChangePasswordView


urlpatterns = [
    
    path('signup/',SignupView.as_view(),name="SignupUser"),
     path('login/',LoginView.as_view(),name="LoginUser"),
     path('profile/',UserProfileView.as_view(),name="ProfileView"),
          path('change-password/',UserChangePasswordView.as_view(),name="ChangePassword"),

]