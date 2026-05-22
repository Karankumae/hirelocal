from django.urls import path
from .views import FreelancerListView,FreelancerbyCategory,Categoryview,CustomerQueryAPIView

urlpatterns = [
    path('freelancers/', FreelancerListView.as_view(), name='freelancer-list'),
    path('categories/', Categoryview.as_view(), name='Category-list'),
    path('queries/', CustomerQueryAPIView.as_view(), name='queries'),
    path('freelancers/<str:category>', FreelancerbyCategory.as_view(), name='freelancer-list-by-category'),
    
]
