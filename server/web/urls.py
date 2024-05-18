from django.urls import path
from . import views

urlpatterns = [
    path('', views.landingPage, name='landingPage'),
    path('Dashboard',views.Dashboard,name='Dashboard'),
]