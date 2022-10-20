# Generated by Django 4.0.4 on 2022-10-20 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pacientexfamiliar', '0007_eps_paciente_x_eps'),
    ]

    operations = [
        migrations.CreateModel(
            name='Familiar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=45)),
                ('apellidos', models.CharField(max_length=45)),
                ('edad', models.PositiveIntegerField(default=0)),
                ('fecha_nacimiento', models.DateField()),
                ('nui', models.BigIntegerField()),
                ('estado_civil', models.CharField(choices=[('S', 'Soltero'), ('C', 'Casado'), ('V', 'Viudo'), ('D', 'Divorciado')], default='S', max_length=1)),
                ('sexo', models.CharField(choices=[('F', 'Femenino'), ('M', 'Masculino'), ('O', 'otro')], default='F', max_length=1)),
                ('numero_telefonico', models.BigIntegerField()),
                ('correo_electronico', models.CharField(max_length=45)),
                ('direccion_residencia', models.CharField(max_length=45)),
                ('nivel_educativo', models.CharField(max_length=45)),
                ('Antecedentes_oncologicos', models.TextField()),
                ('ocupacion', models.CharField(max_length=50)),
                ('competencias', models.TextField()),
                ('create_at', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='eps',
            name='nit',
            field=models.BigIntegerField(),
        ),
        migrations.AlterField(
            model_name='eps',
            name='numero_telefonico',
            field=models.BigIntegerField(),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='historia_clinica',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='nui',
            field=models.BigIntegerField(),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='numero_telefonico',
            field=models.BigIntegerField(),
        ),
        migrations.CreateModel(
            name='Paciente_x_familiar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('parentesco', models.CharField(max_length=50)),
                ('cuidador', models.BooleanField(default=False)),
                ('create_at', models.DateField(auto_now_add=True)),
                ('id_familiar', models.ManyToManyField(to='pacientexfamiliar.familiar')),
                ('id_paciente', models.ManyToManyField(to='pacientexfamiliar.paciente')),
            ],
        ),
    ]
