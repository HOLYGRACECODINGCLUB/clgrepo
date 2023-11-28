from rest_framework import serializers
from .event import Event

class Eventserializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','main_head','sub_head','content','date','image_url')
    