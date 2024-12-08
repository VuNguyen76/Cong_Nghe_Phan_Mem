from django.shortcuts import render

# Create your views here.
# users/views.py
from rest_framework import status, generics
from rest_framework.response import Response
from .serializers import UserSerializer

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
