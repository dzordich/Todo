# Generated by Django 2.2.5 on 2019-10-01 00:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_auto_20190929_2213'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='index',
            field=models.IntegerField(default=1000),
        ),
    ]
