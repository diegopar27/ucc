<template>
  <v-dialog v-model="eps.estado" max-width="500">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>EPS {{ eps.name }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="eps.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="3" class="my-0 py-1"><h3>Nombre</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7> {{ eps.name }} </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>NIT</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ eps.nit }}
            </h7>
          </v-col>

          <v-col cols="3" class="my-0 py-1"><h3>Celular</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ eps.phone }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Correo electronico</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ eps.mail }}
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
    eps: Object,
  },
  mounted() {
    console.log("estoy acca sapo hpta");
  },
};
</script>

<style></style>
