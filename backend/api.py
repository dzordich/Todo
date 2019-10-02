from django.contrib.auth.models import User
from tastypie import fields
from tastypie.authorization import Authorization
from tastypie.exceptions import Unauthorized
from tastypie.resources import ModelResource
from backend.models import Task, Board



class UserObjectsOnlyAuthorization(Authorization):
    # only allows users to request their own stuff
    def read_list(self, object_list, bundle):
        return object_list.filter(user=bundle.request.user)

    def read_detail(self, object_list, bundle):
        return bundle.obj.user == bundle.request.user

    def create_list(self, object_list, bundle):
        # Assuming they're auto-assigned to ``user``.
        return object_list

    def create_detail(self, object_list, bundle):
        return bundle.obj.user == bundle.request.user

    def update_list(self, object_list, bundle):
        allowed = []

        # Since they may not all be saved, iterate over them.
        for obj in object_list:
            if obj.user == bundle.request.user:
                allowed.append(obj)

        return allowed

    def update_detail(self, object_list, bundle):
        return bundle.obj.user == bundle.request.user

    def delete_list(self, object_list, bundle):
        raise Unauthorized("Sorry, no bulk deletes.")

    def delete_detail(self, object_list, bundle):
        return bundle.obj.user == bundle.request.user



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
        filtering = {
            "user": "iexact",
        }


class TaskResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user', full=True)
    board = fields.ToOneField(BoardResource, 'board')
    class Meta:
        queryset = Task.objects.all()
        authorization = Authorization()
        always_return_data = True
