from enum import auto
from django.db import models
from APP.pacientexfamiliar.models import Paciente

# Create your moclasdels here.
class padrinos (models.Model):
    date_joined = models.DateField(auto_now_add=True)
    nombre_padrino = models.CharField(max_length=50, blank=False,null=True, verbose_name='Nombre del padrino')
    apellido_padrino = models.CharField(max_length=50, blank=False,null=True, verbose_name='apellido del padrino')
    tipo_padrino = models.CharField(max_length=50, blank=False,null=True, verbose_name='tipo de padrino')
    sexo = [
        ('F', 'Femenino'),
        ('M', 'Masculino'),
        ('O', 'Otro')
    ]
    sexo = models.CharField(max_length=50, blank=False,null=True, verbose_name='sexo del padrino')
    nivel_educativo = models.CharField(max_length=50, blank=False,null=True, verbose_name='nivel educativo del padrino')
    telefono = models.CharField(max_length=50, blank=False,null=True, verbose_name='telefono del padrino')
    direccion = models.CharField(max_length=50, blank=False,null=True, verbose_name='direccion del padrino')
    ciudad = models.CharField(max_length=50, blank=False,null=True, verbose_name='ciudad del padrino')
    departamento = models.CharField(max_length=50, blank=False,null=True, verbose_name='departamento del padrino')
    correo = models.CharField(max_length=50, blank=False,null=True, verbose_name='correo del padrino')
    tiempo_apradinando = models.CharField(max_length=50, blank=False,null=True, verbose_name='tiempo apadrinado del padrino')
    edad = models.PositiveIntegerField(default=0)
    estrato = models.PositiveIntegerField(default=0)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.apellido_padrino}  {self.nombre_padrino}'

class Paciente_x_padrino(models.Model):
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_padrino = models.ManyToManyField(padrinos)
    create_at = models.DateField(auto_now_add=True)
    
    def obtener_padrino(self):
        sueños = str([id_padrino for id_padrino in self.id_padrino.all().values_list(
            'nombre', flat=True)]).replace("[", "").replace("]", "").replace("'", "")
        return padrinos

    def __str__(self):
         return f'el padrino de {self.id_paciente} es  {self.obtener_padrino()}'

class donacion_padrino(models.Model):
    metodo_donacion = models.CharField(max_length=50, blank=False,null=True, verbose_name='metodo de donacion')
    tipo_donacion = models.CharField(max_length=50, blank=False,null=True, verbose_name='tipo de donacion')
    create_at = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.metodo_donacion}'

class Paciente_x_donacion(models.Model):
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_donacion = models.ManyToManyField(donacion_padrino)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'le donaron {self.id_donacion} a {self.id_paciente} '
