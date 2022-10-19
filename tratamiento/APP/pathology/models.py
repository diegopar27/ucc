from django.db import models

# Create your models here.


class Pathology(models.Model):
    date_joined = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creacion')
    pathology_type = models.CharField(max_length=50, verbose_name='tipo de pathology')
    name = models.CharField(max_length=50, verbose_name='nombre', null=True, blank=True)
    time_pathology = models.DateField(blank=True, null=True, verbose_name='Tiempo de la patalogia')
    condition = models.CharField(max_length=100 , verbose_name='Estado', blank=True, null=True)
    cycle = models.CharField(max_length=50, verbose_name='Ciclo', blank=True, null=True)

    def __str__(self):
        return self.pathology_type

