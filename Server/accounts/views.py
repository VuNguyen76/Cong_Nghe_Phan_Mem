from django.shortcuts import render

from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import LoginSerializer

@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            return Response({'message': 'Login successful'})
        return Response({'error': 'Invalid credentials'}, status=400)
    return Response({'error': 'Invalid data'}, status=400)
