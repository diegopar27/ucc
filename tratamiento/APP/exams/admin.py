from django.contrib import admin
from APP.exams.models import Exams
# Register your models here.


@admin.register(Exams)
class ExamsAdmin(admin.ModelAdmin):
    list_display = ('date_joined', 'state_exam', 'history_exam', 'reading_test', 'exam_date')
    list_filter = ('state_exam',)

