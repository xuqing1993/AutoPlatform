# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-02-07 08:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('pro_id', models.AutoField(primary_key=True, serialize=False)),
                ('pro_name', models.CharField(max_length=100, null=True)),
                ('pro_desc', models.TextField(null=True)),
            ],
        ),
    ]
