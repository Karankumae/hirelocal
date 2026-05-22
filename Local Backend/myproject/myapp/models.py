# Create your models here.
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Freelancer(models.Model):
    name = models.CharField(max_length=100)
    img = models.ImageField(upload_to='freelancer_images/')
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    work_experience = models.PositiveIntegerField(help_text="Experience in years")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='freelancers')

    def __str__(self):
        return self.name



class CustomerQuery(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    text = models.TextField(help_text="Enter your query or message here.")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Query from {self.name} ({self.email})"
