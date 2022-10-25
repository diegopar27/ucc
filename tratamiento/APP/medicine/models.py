from django.db import models

# Create your models here.


class Medicine(models.Model):
    date_joined = models.DateTimeField(auto_now_add=True)
    medication_name = models.CharField(max_length=50, blank=False,null=True,
                                       verbose_name='Nombre del medicine')
    amount = models.IntegerField(blank=False, null=True,verbose_name='Cantidad')
    medication_formula = models.CharField(max_length=50, blank=False,null=True,
                                          verbose_name='Formula del medicamento')

    def __str__(self):
        return self.medication_name