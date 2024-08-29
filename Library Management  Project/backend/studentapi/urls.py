from django.urls import path
from studentapi import views
urlpatterns = [
    path("studentapi/Students",views.student_list,name='studentList'),
    path("studentapi/Students/<int:pk>",views.student_detail,name='studentList'),
]
