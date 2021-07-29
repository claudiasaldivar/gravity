from rest_framework import routers
from .api import UsuariosViewSet, PaseadorViewSet, MascotaViewSet, AgendaViewSet

router = routers.DefaultRouter()
router.register('api/usuarios', UsuariosViewSet, 'Usuarios')
router.register('api/paseador', PaseadorViewSet, 'Paseador')
router.register('api/mascota', MascotaViewSet, 'Mascota')
router.register('api/agenda', AgendaViewSet, 'Agenda')

urlpatterns = router.urls