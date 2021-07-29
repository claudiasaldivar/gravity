# Generated by Django 3.2.5 on 2021-07-23 00:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Doggers', '0002_mascota_paseador'),
    ]

    operations = [
        migrations.CreateModel(
            name='Agenda',
            fields=[
                ('idAgenda', models.AutoField(primary_key=True, serialize=False)),
                ('dia', models.CharField(max_length=20)),
                ('hora', models.CharField(max_length=10)),
                ('perros', models.IntegerField()),
                ('idMascota', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Doggers.mascota')),
                ('idPaseador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Doggers.paseador')),
                ('idUsuarios', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Doggers.usuarios')),
            ],
        ),
    ]
