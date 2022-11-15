<template>
  <v-dialog v-model="paciente.estado" max-width="500">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Pacientes</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="paciente.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="3" class="my-0 py-1"><h3>Tipo de patologia</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7> {{ patologia.tipoPatolg }} </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Nombre</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ patologia.nombre }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Tiempo</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ patologia.tiempo }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Condición</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ patologia.condicion }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Ciclo</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ patologia.ciclo }}
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
    patologias: Object,
  },
};
</script>

<style></style>
