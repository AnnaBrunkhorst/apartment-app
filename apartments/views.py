from django.shortcuts import render

from rest_framework import viewsets
from .models import Apartment
from .serializers import ApartmentSerializer

# ApartmentViewSet automatically provides necessary actions:
# list, create, retrieve, update, destroy

class ApartmentViewSet(viewsets.ModelViewSet):
    queryset = Apartment.objects.all()
    serializer_class = ApartmentSerializer
