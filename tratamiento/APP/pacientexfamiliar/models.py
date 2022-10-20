from django.db import models

class Paciente(models.Model):
    nombres = models.CharField(max_length=45)
    apellidos = models.CharField(max_length=45)
    edad = models.PositiveIntegerField(default=0)
    fecha_nacimiento = models.DateField()
    nui = models.BigIntegerField()
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
    numero_telefonico = models.BigIntegerField()
    correo_electronico = models.CharField(max_length=45)
    historia_clinica = models.TextField(null=False)
    direccion_residencia = models.CharField(max_length=45)
    nivel_educativo = models.CharField(max_length=45)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.apellidos}  {self.nombres}'


class Sueños(models.Model):
    tipo = models.CharField(max_length=45)
    nombre = models.CharField(max_length=45)
    descripcion = models.TextField()
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.nombre}'


class Paciente_x_sueños(models.Model):
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_sueño = models.ManyToManyField(Sueños)
    create_at = models.DateField(auto_now_add=True)

    def obtener_sueños(self):
        sueños = str([id_sueño for id_sueño in self.id_sueño.all().values_list(
            'nombre', flat=True)]).replace("[", "").replace("]", "").replace("'", "")
        return sueños

    def __str__(self):
        return f'el sueño de {self.id_paciente} es  {self.obtener_sueños()}'


class Estado(models.Model):
    nombre = models.CharField(null=False, max_length=50)
    descripcion = models.TextField()
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.nombre}'


class Paciente_x_estado(models.Model):
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_estado = models.ForeignKey(Estado, on_delete=models.CASCADE)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'el estado del paciente {self.id_paciente} es {self.id_estado}'

class Eps(models.Model):
    nombre = models.CharField(max_length=45)
    nit = models.BigIntegerField()
    numero_telefonico = models.BigIntegerField()
    correo_electronico = models.CharField(max_length=50)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.nombre}'

class Paciente_x_eps(models.Model):
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_eps = models.ForeignKey(Eps, on_delete=models.CASCADE)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'el paciente {self.id_paciente} tiene eps {self.id_eps}'

class Familiar(models.Model):
    nombres = models.CharField(max_length=45)
    apellidos = models.CharField(max_length=45)
    edad = models.PositiveIntegerField(default=0)
    fecha_nacimiento = models.DateField()
    nui = models.BigIntegerField()
    estadocivil = [
        ('S', 'Soltero'),
        ('C', 'Casado'),
        ('V', 'Viudo'),
        ('D', 'Divorciado')
    ]
    estado_civil = models.CharField(max_length=1, choices=estadocivil, default='S')
    sexos = [
        ('F', 'Femenino'),
        ('M', 'Masculino'),
        ('O', 'otro')
    ]
    sexo = models.CharField(max_length=1, choices=sexos, default='F')
    numero_telefonico = models.BigIntegerField()
    correo_electronico = models.CharField(max_length=45)
    direccion_residencia = models.CharField(max_length=45)
    nivel_educativo = models.CharField(max_length=45)
    Antecedentes_oncologicos = models.TextField()
    ocupacion = models.CharField(max_length=50)
    competencias = models.TextField()
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.apellidos}  {self.nombres}'



class Paciente_x_familiar(models.Model):
    id_paciente = models.ManyToManyField(Paciente)
    id_familiar = models.ManyToManyField(Familiar)
    parentesco = models.CharField(max_length=50)
    cuidador = models.BooleanField(default=False)
    create_at = models.DateField(auto_now_add=True)

    def obtener_pacientes(self):
        pacientes = str([id_paciente for id_paciente in self.id_paciente.all().values_list(
            'nombres', flat=True)]).replace("[", "").replace("]", "").replace("'", "")
        return pacientes

    def obtener_familiar(self):
        familiarr = str([id_familiar for id_familiar in self.id_familiar.all().values_list(
            'nombres', flat=True)]).replace("[", "").replace("]", "").replace("'", "")
        return familiarr

    def __str__(self):
        return f'el paciente {self.obtener_pacientes()} tiene los siguientes familiares: {self.obtener_familiar()}'










