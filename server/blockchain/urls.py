from django.urls import path
from . import views

urlpatterns = [
    path('TransactionPage',views.TransactionPage,name='TransactionPage'),
    path('TradingPage',views.TradingPage,name='TradingPage'),
    
]