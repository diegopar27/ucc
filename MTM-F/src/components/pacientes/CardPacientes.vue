<template>
  <v-dialog v-model="paciente.estado" max-width="600">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Paciente {{ paciente.name }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="paciente.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="4" class="my-0 py-1"><h3>Nombre</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7> {{ paciente.nombre }} {{ paciente.apellidos }} </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Nucleo familiar</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ paciente.familia }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Cumpleaños</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ paciente.cumpleanos }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Edad</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ paciente.edad }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Correo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ paciente.correo }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Seguro finerario</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ paciente.seguro ? "Tiene" : "No tiene" }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Genero</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ paciente.genero }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Nivel educativo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ paciente.educacion }}
            </h7>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Dirección</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h7>
              {{ paciente.direccion }}
            </h7>
          </v-col>
        </v-row>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-6">
        <v-btn class="mx-auto"> Familiares </v-btn>
        <v-btn class="mx-auto"> Padrinos </v-btn>
        <v-btn class="mx-auto" @click="verExamen()"> Examenes </v-btn>
        <v-btn class="mx-auto"> Patologia </v-btn>
      </v-footer>
    </v-card>
    <EXAMEN :examen_pro="examen_pro" v-if="examen_pro.estado"> </EXAMEN>
  </v-dialog>
</template>

<script>
import examenOp from "../examenes/Examenes.vue";
export default {
  props: {
    paciente: Object,
  },
  components: {
    EXAMEN: examenOp,
  },
  data() {
    return {
      examen_pro: {
        estado: false,
      },
    };
  },
  mounted() {
    console.log(this.paciente);
  },
  methods: {
    verExamen() {
      this.examen_pro.id_paciente = this.paciente.id;
      this.examen_pro.name = this.paciente.names + " " + this.paciente.suernames;
      this.examen_pro.estado = true;
    },
  },
};
</script>

<style></style>
