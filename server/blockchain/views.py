from django.shortcuts import render

# Create your views here.
def TransactionPage(request):
    return render(request,'TransactionPage.html',{})

def TradingPage(request):
    return render(request,'TradingPage.html',{})

