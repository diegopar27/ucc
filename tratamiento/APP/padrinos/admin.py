from django.contrib import admin

from APP.padrinos.models import padrinos
from APP.padrinos.models import Paciente_x_padrino
from APP.padrinos.models import donacion_padrino
from APP.padrinos.models import Paciente_x_donacion
@admin.register(padrinos)
class PadrinosAdmin(admin.ModelAdmin):
 pass

@admin.register(Paciente_x_padrino)
class Paciente_x_padrinoAdmin(admin.ModelAdmin):
 pass

@admin.register(donacion_padrino)
class donacion_padrinoAdmin(admin.ModelAdmin):
 pass

@admin.register(Paciente_x_donacion)
class Paciente_x_donacionAdmin(admin.ModelAdmin):
 pass

