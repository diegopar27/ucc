from django.db import models

class Paciente(models.Model):
    nombres = models.CharField(max_length=45)
    apellidos = models.CharField(max_length=45)
    edad = models.PositiveIntegerField(default=0)
    fecha_nacimiento = models.DateField()
    nui = models.BigIntegerField(max_length=10)
    fecha_inicio_tratamiento = models.DateField()
    Seguro_funebre = models.BooleanField(default=False)
    nucleo_familiar = models.CharField(max_length=45)
    sexos = [
        ('F', 'Femenino'),
        ('M', 'Masculino'),
        ('O', 'otro')
    ]
    sexo = models.CharField(max_length=1, choices=sexos, default='F')
    fecha_ingreso = models.DateField()
    numero_telefonico = models.BigIntegerField(max_length=10)
    correo_electronico = models.CharField(max_length=45)
    historia_clinica = models.TextField(null=True, blank=True)
    direccion_residencia = models.CharField(max_length=45)
    nivel_educativo = models.CharField(max_length=45)
    create_at = models.DateField(auto_now_add=True)


class Sueños(models.Model):
    tipo = models.CharField(max_length=45)
    nombre = models.CharField(max_length=45)
    descripcion = models.TextField()
    create_at = models.DateField(auto_now_add=True)


class Paciente_x_sueños(models.Model):
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_sueño = models.ManyToManyField(Sueños)
    create_at = models.DateField(auto_now_add=True)






