<template>
  <v-dialog v-model="paciente.estado" max-width="600">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Paciente {{ paciente.name }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="cerrarCardPacientes()"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="4" class="my-0 py-1"><h3>Nombre</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>{{ paciente.names }} {{ paciente.suernames }}</h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>EPS</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              <!-- {{ eps.name }} -->
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Fecha de nacimiento</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ paciente.birth_date }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Edad</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ edad }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Correo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ paciente.mail }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Seguro finerario</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ paciente.funeral_insurance ? "Tiene" : "No tiene" }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Genero</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ paciente.gender }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Nivel educativo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ paciente.education_level }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Dirección</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ paciente.direction }}
            </h5>
          </v-col>
        </v-row>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-6">
        <v-btn class="mx-auto"> Familiares </v-btn>
        <v-btn class="mx-auto" @click="verPadrinos()"> Padrinos </v-btn>
        <v-btn class="mx-auto" @click="verExamen()"> Examenes </v-btn>
        <v-btn class="mx-auto"> Patologia </v-btn>
      </v-footer>
    </v-card>
    <EXAMEN :examen_pro="examen_pro" v-if="examen_pro.estado"> </EXAMEN>
    <PADRINOS :opcion_padrino="opcion_padrino" v-if="opcion_padrino.estado"> </PADRINOS>
  </v-dialog>
</template>

<script>
import opcionPadrinos from "../padrinos/ComponentPadrinos.vue";
import examenOp from "../examenes/Examenes.vue";
import { mapActions } from "vuex";
import moment from "moment";
export default {
  props: {
    paciente: Object,
  },
  components: {
    EXAMEN: examenOp,
    PADRINOS: opcionPadrinos,
  },
  data() {
    return {
      examen_pro: {
        estado: false,
      },
      opcion_padrino: {
        estado: false,
      },
      eps: "",
    };
  },
  computed: {
    edad() {
      let fecha_actual = moment().locale("es");
      let fecha_hoy = fecha_actual.format("DD-MM-YYYY");
      let hoy = fecha_hoy.slice(6);
      let edad = fecha_hoy.slice(6) - this.paciente.birth_date.slice(0, 4);
      let mes = Number(fecha_hoy.slice(3, 5)) - Number(this.paciente.birth_date.slice(3, 5));

      if (mes < 0 || (mes === 0 && Number(fecha_hoy.slice(0, 2)) < Number(this.paciente.birth_date.slice(8)))) {
        edad--;
      }
      return edad;
    },
  },
  async mounted() {
    const id = this.paciente.id;
    console.log(id);
    // this.eps = await this._getEpsId({ id });
    console.log("eps", this.eps);
  },
  methods: {
    ...mapActions({
      _getEpsId: "eps/_getEpsId",
    }),
    cerrarCardPacientes() {
      this.paciente.estado = false;
    },
    verPadrinos() {
      this.opcion_padrino.id_paciente = this.paciente.id;
      this.opcion_padrino.names = this.paciente.names;
      this.opcion_padrino.estado = true;
    },
    verExamen() {
      this.examen_pro.id_paciente = this.paciente.id;
      this.examen_pro.name = this.paciente.names + " " + this.paciente.suernames;
      this.examen_pro.estado = true;
    },
  },
};
</script>

<style></style>
