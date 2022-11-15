<template>
  <v-dialog v-model="padrino.estado" max-width="600">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Paciente {{ padrino.nombre }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="padrino.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="4" class="my-0 py-1"><h3>Nombre</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7> {{ padrino.nombre }} {{ padrino.apellidos }} </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Departamento</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.department }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Ciudad</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.city }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Edad</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.edad }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Estrato</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.stratum }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Correo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.correo }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Tiempo en Fundación</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.time_sponsoring }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Genero</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.genero }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Nivel educativo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.educacion }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Dirección</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ padrino.direccion }}
            </h7>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    padrino: Object,
  },
};
</script>

<style></style>
