from django.contrib import admin

from backend import models
# Register your models here.
admin.site.register(models.Task)
admin.site.register(models.Board)
