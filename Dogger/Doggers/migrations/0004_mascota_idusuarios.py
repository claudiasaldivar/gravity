# Generated by Django 3.1 on 2021-07-24 16:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Doggers', '0003_agenda'),
    ]

    operations = [
        migrations.AddField(
            model_name='mascota',
            name='idUsuarios',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Doggers.usuarios'),
            preserve_default=False,
        ),
    ]
