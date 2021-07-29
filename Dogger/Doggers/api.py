from Doggers.models import Usuarios, Paseador, Mascota, Agenda
from rest_framework import viewsets, permissions
from .serializars import UsuariosSerializer, PaseadorSerializer, MascotaSerializer, AgendaSerializer

#Viewset
class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsuariosSerializer
    
class PaseadorViewSet(viewsets.ModelViewSet):
    queryset = Paseador.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PaseadorSerializer
    
class MascotaViewSet(viewsets.ModelViewSet):
    queryset = Mascota.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MascotaSerializer
    
class AgendaViewSet(viewsets.ModelViewSet):
    queryset = Agenda.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AgendaSerializer


