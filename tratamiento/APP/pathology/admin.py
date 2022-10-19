from django.contrib import admin
from APP.pathology.models import Pathology
# Register your models here.


@admin.register(Pathology)
class PathologyAdmin(admin.ModelAdmin):
    list_display = ('pathology_type', 'name', 'time_pathology', 'condition', 'cycle',)
    list_filter = ('pathology_type',)
