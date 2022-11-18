<template>
    <v-dialog v-model="familiar.estado" max-width="600">
      <v-card>
        <v-footer color="primary" class="white--text">
          <h1>Familiar {{ familiar.nombre }}</h1>
          <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
          <v-spacer> </v-spacer>
          <v-btn icon @click="familiar.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
        </v-footer>
        <v-container>
          <v-row justify="start">
            <v-col cols="4" class="my-0 py-1"><h3>Nombre</h3> </v-col>
            <v-col cols="8" class="my-0 py-1">
              <h7> {{ familiar.nombre }} {{ familiar.apellidos }} </h7>
            </v-col>
            <v-col cols="4" class="my-0 py-1"><h3>Cumpleaños</h3> </v-col>
            <v-col cols="8" class="my-0 py-1">
              <h7>
                {{ familiar.cumpleanos }}
              </h7>
            </v-col>
            <v-col cols="4" class="my-0 py-1"><h3>Edad</h3> </v-col>
            <v-col cols="8" class="my-0 py-1">
              <h7>
                {{ familiar.edad }}
              </h7>
            </v-col>
            <v-col cols="4" class="my-0 py-1"><h3>Correo</h3> </v-col>
            <v-col cols="8" class="my-0 py-1">
              <h7>
                {{ familiar.correo }}
              </h7>
            </v-col>
            <v-col cols="4" class="my-0 py-1"><h3>Genero</h3> </v-col>
            <v-col cols="8" class="my-0 py-1">
              <h7>
                {{ familiar.genero }}
              </h7>
            </v-col>
            <v-col cols="4" class="my-0 py-1"><h3>Nivel educativo</h3> </v-col>
            <v-col cols="8" class="my-0 py-1">
              <h7>
                {{ familiar.educacion }}
              </h7>
            </v-col>
            <v-col cols="4" class="my-0 py-1"><h3>Dirección</h3> </v-col>
            <v-col cols="8" class="my-0 py-1">
              <h7>
                {{ familiar.direccion }}
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
      familiar: Object,
    },
  };
  </script>
  
  <style></style>
  