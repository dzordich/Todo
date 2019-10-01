from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from backend.models import Task

# Create your views here.

@api_view(['PATCH'])
def update_pos(request):
    for task in request.data:
        t = Task.objects.get(pk=task.pk)
        t.index = task.index
        t.save()
    return Response(status=status.HTTP_202_ACCEPTED)
