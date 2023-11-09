from django.shortcuts import render
from rest_framework import generics
from .serializers import PersonSerializer
from .event import Event
from .eventserializer import Eventserializer
from .models import Person
from rest_framework.views import APIView
from rest_framework.response import Response

def front(request):
    context = { }
    return render(request, "index.html", context)


   
class PersonView(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    # def create(self, request, *args, **kwargs):
    #     response = super().create(request, *args, **kwargs)
    #     # You can add custom logic after creating the person object here
    #     print(response.data)
    #     return response
    
    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = PersonSerializer(queryset, many=True)
        return Response(serializer.data)
    
class PersonView(generics.CreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        # You can add custom logic after creating the person object here
        print(response.data)
        return response


class EventView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = Eventserializer
    # def create(self, request, *args, **kwargs):
    #     response = super().create(request, *args, **kwargs)
    #     # You can add custom logic after creating the person object here
    #     print(response.data)
    #     return response
    
    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)
    
class EventView(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = Eventserializer
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        # You can add custom logic after creating the person object here
        print(response.data)
        return response


