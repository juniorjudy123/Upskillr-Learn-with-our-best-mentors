from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here
# class User(AbstractUser):
#     is_student = models.BooleanField(default=False)
#     is_tutor = models.BooleanField(default=False)

#     # Optional fields
#     bio = models.TextField(blank=True)
#     profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)


class course_tbl(models.Model):
    course_name=models.CharField(max_length=50)
    description=models.CharField(max_length=100)

    def __str__(self):
        return self.course_name