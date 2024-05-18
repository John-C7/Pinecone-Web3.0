from django.urls import path
from . import views

urlpatterns = [
    path('',views.landingPage,name='landingPage'),
    path('ToLoginPage',views.ToLoginPage,name='ToLoginPage'),
    path('Login',views.Login,name='Login'),
    path('Register',views.Register,name='Register'),
]