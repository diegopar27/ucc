from django.contrib import admin

from .models import Tratamiento
# Register your models here.

@admin.register(Tratamiento)
class TratamientoAdmin(admin.ModelAdmin):
    list_display = ('name_patient',)
