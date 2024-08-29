from django.db import models

# Create your models here.

class Student(models.Model):
    student_name=models.CharField(max_length=100,null=False,blank=False)
    book_name =models.CharField(max_length=200,null=False,blank=False)
    student_prn = models.CharField(max_length=200,null=False,blank=False)
    student_class = models.CharField(max_length=200,null=False,blank=False)
    student_phone= models.IntegerField(null=False,blank=False)
    student_email = models.EmailField(null=False,blank=False)
    student_address = models.TextField(null=False,blank=False)
    rent_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.student_name