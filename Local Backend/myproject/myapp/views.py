# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Freelancer,Category
from .serializers import FreelancerSerializer,CategorySerializer,CustomerQuerySerializer

class FreelancerListView(APIView):
    def get(self, request):
        freelancers = Freelancer.objects.all()
        serializer = FreelancerSerializer(freelancers, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

class FreelancerbyCategory(APIView):
    def get(self, request,category):
        category=Category.objects.get(name=category)
        freelancers = Freelancer.objects.filter(category=category)
        serializer = FreelancerSerializer(freelancers, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class Categoryview(APIView):
    def get(self, request):
        categories=Category.objects.all()
        serializer = CategorySerializer(categories, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    


class CustomerQueryAPIView(APIView):
    def post(self, request):
        serializer = CustomerQuerySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Query submitted successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
