from tastypie import fields
from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from backend.models import Task, Board


class BoardResource(ModelResource):
    tasks = fields.ToManyField('backend.api.TaskResource', 'tasks', full=True)

    class Meta:
        queryset = Board.objects.all()
        authorization = Authorization()
        resource_name = "board"


class TaskResource(ModelResource):
    board = fields.ToOneField(BoardResource, 'board')
    class Meta:
        queryset = Task.objects.all()
        authorization = Authorization()




