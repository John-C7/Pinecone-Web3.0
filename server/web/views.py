from django.shortcuts import render

# Create your views here.

def landingPage(request):
    return render(request,'landingPage.html')


def Dashboard(request):
    return render(request,'Dashboard.html')