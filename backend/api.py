from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from backend.models import ToDoItem


class ToDoResource(ModelResource):
    class Meta:
        queryset = ToDoItem.objects.all()
        authorization = Authorization()
