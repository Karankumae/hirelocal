from django.contrib import admin
from .models import Category,Freelancer,CustomerQuery
# Register your models here.
admin.site.register(Category)
admin.site.register(Freelancer)
admin.site.register(CustomerQuery)