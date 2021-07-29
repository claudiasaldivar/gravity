from rest_framework import serializers
from Doggers.models import Usuarios, Paseador, Mascota, Agenda

# serializars
class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'

class PaseadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paseador
        fields = '__all__'  
        
class MascotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = '__all__'  
        
class AgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = '__all__'