import graphene
from graphene_django.types import DjangoObjectType

from backend.models import Board, Task


class BoardType(DjangoObjectType):
    class Meta:
        model = Board


class TaskType(DjangoObjectType):
    class Meta:
        model = Task


class Query:
    all_boards = graphene.List(BoardType)
    all_tasks = graphene.List(TaskType)

    def resolve_board_tasks(self, info, board_id):
        return Board.objects.get(pk=board_id).tasks.all()