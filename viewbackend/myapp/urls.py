from django.urls import path
from .views import front

urlpatterns = [
    path('',front)
]
