from enum import auto
from django.db import models

# Create your moclasdels here.
class padrinos (models.Model):
    date_joined = models.DateField(auto_now_add=True)
    nombre_padrino = models.CharField(max_length=50, blank=False,null=True, verbose_name='Nombre del padrino')
    apellido_padrino = models.CharField(max_length=50, blank=False,null=True, verbose_name='apellido del padrino')
    tipo_padrino = models.CharField(max_length=50, blank=False,null=True, verbose_name='tipo de padrino')
    sexo = models.CharField(max_length=50, blank=False,null=True, verbose_name='sexo del padrino')
    nivel_educativo = models.CharField(max_length=50, blank=False,null=True, verbose_name='nivel educativo del padrino')
    telefono = models.CharField(max_length=50, blank=False,null=True, verbose_name='telefono del padrino')
    direccion = models.CharField(max_length=50, blank=False,null=True, verbose_name='direccion del padrino')
    ciudad = models.CharField(max_length=50, blank=False,null=True, verbose_name='ciudad del padrino')