from django.urls import path
from .views import PersonView,front,EventView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import generics
from .models import Person
from .serializers import PersonSerializer
from .event import Event
from .eventserializer import Eventserializer
urlpatterns = [
    path('api/', generics.ListAPIView.as_view(queryset=Person.objects.all(), serializer_class=PersonSerializer), name='user-list'),
    path('ap', PersonView.as_view()),
    path('event/', generics.ListAPIView.as_view(queryset=Event.objects.all(), serializer_class=Eventserializer), name='event-list'),
    path('eventget', EventView.as_view()),
    path('',front,name="front"),
    path('mechanical',front,name="front"),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)