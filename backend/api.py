from django.contrib.auth.models import User
from tastypie import fields
from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from backend.models import Task, Board



class UserResource(ModelResource):
    # username = fields.CharField(attribute='username')
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        fields = ['id', 'username']



class BoardResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user', full=True)
    tasks = fields.ToManyField('backend.api.TaskResource', 'tasks', full=True)

    class Meta:
        queryset = Board.objects.all()
        authorization = Authorization()
        resource_name = "board"
        always_return_data = True


class TaskResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user', full=True)
    board = fields.ToOneField(BoardResource, 'board')
    class Meta:
        queryset = Task.objects.all()
        authorization = Authorization()
        always_return_data = True




