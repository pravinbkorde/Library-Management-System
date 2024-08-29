from django.db import models

# Create your models here.
class Books(models.Model):
    book_name = models.CharField(max_length=200,null=False,blank=False)
    author = models.CharField(max_length=200,null=False,blank=False)
    data = models.DateTimeField(auto_now_add=True)
    book_description = models.TextField(null=False,blank=False)

    def __str__(self):
        return self.book_name