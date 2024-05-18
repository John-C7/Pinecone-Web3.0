from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth
from django.conf import settings
import re

# Create your views here.

#home page
def landingPage(request):
    return render(request, 'landingPage.html')

def ToLoginPage(request):
    return render(request,'loginPage.html')



def Login(request):
    if request.method == 'POST':
        usn = request.POST['username']
        passw = request.POST['password']

        User = auth.authenticate(username=usn, password=passw)
        if User is not None:
            auth.login(request, User)
            return render(request,'HomePage.html',{'username':usn, })
        else:
            messages.error(request, 'Invalid Credentials. Please check.')
    
    return render(request, 'LoginPage.html',{'username':usn,})


def Register(request):
    
    if request.method == 'POST':
        usn = request.POST['username']
        email = request.POST['email']
        passw = request.POST['password']

        if not re.match(r'^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', email): 
            messages.error(request, 'Invalid Credentials. Please check.')

       # Check if a user with the same username already exists
        if User.objects.filter(username=usn).exists():
            messages.error(request, 'Account already exists. Please login to your account.')
            return render(request, 'LoginPage.html')

        # If the user doesn't exist, create a new user
        user = User.objects.create_user(username=usn, password=passw, email=email)
        
        return render(request, 'LandingPage.html', {'username':usn,})
   
    # If the request method is not POST, render the registration page
    return render(request, 'LoginPage.html'),messages('Wrong Credentials')