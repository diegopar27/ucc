from django.contrib import admin
from APP.medicine.models import Medicine
# Register your models here.


@admin.register(Medicine)
class MedicineAdmin(admin.ModelAdmin):
    list_display = ('date_joined', 'medication_name', 'amount', 'medication_formula',)
    list_filter = ('medication_name',)
