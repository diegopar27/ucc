<template>
  <v-dialog v-model="examen.estado" max-width="500">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Examenes {{ examen.name }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="examen.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="3" class="my-0 py-1"><h3>Estado examen</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7> {{ paciente_x_examen.estado_examen }} </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Historia examen</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ paciente_x_examen.historia_examen }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Lectura examen</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ paciente_x_examen.lectura_examen }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Fecha examen</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ paciente_x_examen.fecha_examen }}
            </h7>
          </v-col>
          <v-col cols="3" class="my-0 py-1"><h3>Numero examenes</h3> </v-col>
          <v-col cols="9" class="my-0 py-1">
            <h7>
              {{ examen.numbero_examen }}
            </h7>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    examen: Object,
  },
  data() {
    return {
      paciente_x_examen: {},
    };
  },
  methods: {
    ...mapActions({
      _getExamen: "examenes/_getExamen",
    }),
  },
  async mounted() {
    const id = this.examen.id_paciente;
    this.paciente_x_examen = await this._getExamen({ id });
  },
};
</script>

<style></style>
