from django.db import models

# Create your models here.
class Usuarios(models.Model):
    idUsuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    telefono = models.CharField(max_length=10)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    
class Paseador(models.Model):
    idPaseador = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    telefono = models.CharField(max_length=10)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)   
    
class Mascota(models.Model):
    idMascota = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    edad = models.IntegerField(default=0)
    sexo = models.CharField(max_length=10, blank=True)    
    tamaño = models.CharField(max_length=10)
    observaciones = models.CharField(max_length=200, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    idUsuario = models.ForeignKey('Usuarios', on_delete=models.CASCADE)
        
class Agenda(models.Model):
    idAgenda = models.AutoField(primary_key=True)
    dia = models.CharField(max_length=20)
    hora = models.CharField(max_length=10)
    perros = models.IntegerField()
    idMascota = models.ForeignKey('Mascota', on_delete=models.CASCADE)
    idUsuario = models.ForeignKey('Usuarios', on_delete=models.CASCADE)
    idPaseador = models.ForeignKey('Paseador', on_delete=models.CASCADE)    

    