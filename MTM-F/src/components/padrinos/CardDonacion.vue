<template>
  <v-dialog v-model="padrino.estado" max-width="600">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Padrino {{ padrino.name }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="padrino.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="4" class="my-0 py-1"><h3>Nombre</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>{{ padrino.name }} {{ padrino.surname }}</h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Tipo de donacion</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <v-text-field
                v-model="tipo_donacion"
                color="primary"
                :rules="rules"
                id="surname"
                type="text"
                required
                outlined
                dense
              />
          </v-col>
        </v-row>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-6">
        <v-btn class="mx-auto" color="primary" @click="realizarDonacion()"> Donar </v-btn>
      </v-footer>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      tipo_donacion: "",
      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  props: {
    padrino: Object,
    donar: true
  },
  mounted() {
    console.log(this.padrino);
  },
  computed: {
    realizarDonacion(){

    }
  },
};
</script>

<style></style>
