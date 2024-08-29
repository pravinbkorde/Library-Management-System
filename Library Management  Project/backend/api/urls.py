from django.urls import path
from api import views

urlpatterns = [
    path('api/books',views.book_list,name="bool_list"),
    path('api/books/<int:pk>',views.book_detail,name="book_list")
]
