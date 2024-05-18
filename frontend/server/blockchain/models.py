from django.db import models

# Create your models here.
class Report(models.Model):
    addressFrom = models.CharField(max_length=255)
    addressTo = models.CharField(max_length=255)
    tokenId = models.CharField()
    timeStamp =models.IntegerField()

    
class Owner(models.Model):
    motherId = models.IntegerField()
    fatherId = models.IntegerField()
    addressOfOwner = models.IntegerField()