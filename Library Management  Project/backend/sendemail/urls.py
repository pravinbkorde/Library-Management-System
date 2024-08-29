from django.urls import path
from sendemail import views
urlpatterns = [
    path('send/', views.send_email, name='send_email'),
]
