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
            <h5> {{ familiar.nombre }} {{ familiar.apellidos }} </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Ocupación</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ familiar.occupation }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Correo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ familiar.correo }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Genero</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ familiar.genero }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Nivel educativo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ familiar.educacion }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Dirección</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ familiar.direccion }}
            </h5>
          </v-col>
        </v-row>
      </v-container>
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
