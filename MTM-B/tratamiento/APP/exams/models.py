from django.db import models

# Create your models here.


class Exams(models.Model):
    date_joined = models.DateTimeField(auto_now_add=True)
    state_exam = models.CharField(max_length=50, null=True, blank=False, verbose_name='Estado del examen')
    history_exam = models.CharField(max_length=50, null=True, blank=False, verbose_name='Historia del examen')
    reading_test = models.CharField(max_length=50, null=True, blank=False, verbose_name='Lectura del examen')
    exam_date = models.DateField(blank=False, null=True, verbose_name='Fecha del examen')
    number_of_exams = models.IntegerField(blank=False, null=True, verbose_name='Numero de exams')

    def __str__(self):
        return self.state_exam