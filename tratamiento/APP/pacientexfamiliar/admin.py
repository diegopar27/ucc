from django.contrib import admin
from APP.pacientexfamiliar.models import *
# Register your models here.

admin.site.register(Paciente)
admin.site.register(Sueños)
admin.site.register(Paciente_x_sueños)
