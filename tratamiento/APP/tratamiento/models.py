from django.db import models

# Create your models here.


class Tratamiento(models.Model):
    name_patient = models.CharField(max_length=50,verbose_name='nombre de tratamiento')
    start_date = models.DateField(null=True)
    drug_name = models.CharField(max_length=40, verbose_name='nombre del medicamento')
    amount = models.IntegerField(verbose_name='cantidad')
    location = models.CharField(max_length=30,verbose_name='ubicacion')
    eps = models.CharField(max_length=40,verbose_name='eps')

    def __str__(self):
        return self.name_patient
