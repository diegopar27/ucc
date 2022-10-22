from enum import auto
from django.db import models

# Create your moclasdels here.
class padrinos (models.Model):
    date_joined = models.DateField(auto_now_add=True)
    padrino_name = models.CharField(max_length=50, blank=False,null=True, verbose_name='Nombre del padrino')
    padrino_surname = models.CharField(max_length=50, blank=False,null=True, verbose_name='apellido del padrino')
    padrino_type = models.CharField(max_length=50, blank=False,null=True, verbose_name='tipo de padrino')
    sex = models.CharField(max_length=50, blank=False,null=True, verbose_name='sexo del padrino')
    education_level = models.CharField(max_length=50, blank=False,null=True, verbose_name='nivel educativo del padrino')
    phone = models.CharField(max_length=50, blank=False,null=True, verbose_name='telefono del padrino')
    direction = models.CharField(max_length=50, blank=False,null=True, verbose_name='direccion del padrino')
    city = models.CharField(max_length=50, blank=False,null=True, verbose_name='ciudad del padrino')