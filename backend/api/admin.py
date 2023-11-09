from django.contrib import admin
from .models import Person
from .event import Event
# Register your models here.
admin.site.register(Person)
admin.site.register(Event)