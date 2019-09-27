from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ToDoItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField()
    content = models.TextField()

    def __str__(self):
        return f'{self.user.username} | {self.date} | {self.content[:71]}'

    class Meta:
        ordering = ['-date']
