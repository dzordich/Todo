from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from backend.models import Task


class TaskResource(ModelResource):
    class Meta:
        queryset = Task.objects.all()
        authorization = Authorization()
