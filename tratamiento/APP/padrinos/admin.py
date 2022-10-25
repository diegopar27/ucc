from django.contrib import admin

from tratamiento.APP.padrinos.models import padrinos

@admi.register(padrinos)
class PadrinosAdmin(admin.ModelAdmin):
 pass
