from rest_framework import serializers
from .models import Freelancer, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class FreelancerSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Freelancer
        fields = ['id', 'name', 'img', 'phone_number', 'address', 'work_experience', 'category']


from .models import CustomerQuery

class CustomerQuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerQuery
        fields = ['id', 'name', 'phone', 'email', 'text', 'created_at']
        read_only_fields = ['id', 'created_at']