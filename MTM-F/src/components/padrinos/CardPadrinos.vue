<template>
  <v-dialog v-model="padrino.estado" max-width="500">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Pacientes</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="padrino.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="3" class="my-0 py-1"><h3>Nombre</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7> {{ padrino.nombre }} {{ padrino.apellidos }} </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Tipo de documento</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ padrino.tipo_documento }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Cedula</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ padrino.cedula }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Edad</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ padrino.edad }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Correo</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ padrino.correo }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Eps</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ padrino.eps }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Genero</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ padrino.genero }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Cedula</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ padrino.cedula }}
            </h7>
          </v-col>
        </v-row>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-6">
        <v-btn class="mx-auto"> Familiares </v-btn>
        <v-btn class="mx-auto"> Padrinos </v-btn>
      </v-footer>
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
