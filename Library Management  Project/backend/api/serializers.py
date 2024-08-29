from rest_framework import serializers
from api.models import Books

class Bookserializer(serializers.ModelSerializer):
    class Meta:
        model= Books
        fields= '__all__'