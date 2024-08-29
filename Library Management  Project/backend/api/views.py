from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Books
from api.serializers import Bookserializer
# Create your views here.

@api_view(['GET', 'POST'])
def book_list(request):
    if request.method == 'GET':
        book = Books.objects.all()
        serializer = Bookserializer(book,many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer = Bookserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def book_detail(request, pk):
    try:
        item = Books.objects.get(pk=pk)
    except Books.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Bookserializer(item)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = Bookserializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)