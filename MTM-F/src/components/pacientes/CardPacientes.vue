<template>
  <v-dialog v-model="paciente.estado" max-width="700">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Paciente {{ paciente.names }}</h1>
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
              {{ eps.name }}
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
          <v-col cols="4" class="my-0 py-1"><h3>Sueño</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ suenos.name }}
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
        <v-btn class="mx-auto" color="primary" @click="asignarFamiliar()"> Añadir familiares </v-btn>
        <v-btn class="mx-auto" color="primary" @click="verPadrinos()"> Padrinos </v-btn>
        <v-btn class="mx-auto" color="primary" @click="verExamen()"> Examenes </v-btn>
        <v-btn class="mx-auto" color="primary" @click="verPatologia()"> Patologia </v-btn>
      </v-footer>
    </v-card>
    <EXAMEN :examen_pro="examen_pro" v-if="examen_pro.estado"> </EXAMEN>
    <PADRINOS :opcion_padrino="opcion_padrino" v-if="opcion_padrino.estado"> </PADRINOS>
    <FAMILIAR :asignar_familia="asignar_familia" v-if="asignar_familia.estado"> </FAMILIAR>
    <PATOLOGIA :opcion_patologia="opcion_patologia" v-if="opcion_patologia.estado"> </PATOLOGIA>
  </v-dialog>
</template>

<script>
import PADRINOS from "../padrinos/ComponentPadrinos.vue";
import FAMILIAR from "../familiares/ListarFamiliar.vue";
import EXAMEN from "../examenes/Examenes.vue";
import PATOLOGIA from "../patologias/ComponentPatologias.vue";
import { mapActions } from "vuex";
import moment from "moment";
export default {
  props: {
    paciente: Object,
  },
  components: {
    EXAMEN,
    PADRINOS,
    FAMILIAR,
    PATOLOGIA,
  },
  data() {
    return {
      asignar_familia: {
        estado: false,
      },
      examen_pro: {
        estado: false,
      },
      opcion_padrino: {
        estado: false,
      },
      opcion_patologia: {
        estado: false,
      },
      eps: "",
      suenos: "",
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
    const patient = this.paciente.id;
    this.eps = await this._getEpsId({ patient });
    this.suenos = await this._getSueno({ patient });
  },
  methods: {
    ...mapActions({
      _getEpsId: "eps/_getEpsId",
      _getSueno: "suenos/_getSueno",
    }),
    asignarFamiliar() {
      this.asignar_familia.estado = true;
      this.asignar_familia.id_paciente = this.paciente.id;
      this.asignar_familia.names_paciente = this.paciente.names;
    },
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
    verPatologia() {
      this.opcion_patologia.id_patient = this.paciente.id;
      this.opcion_patologia.name = this.paciente.names + " " + this.paciente.suernames;
      this.opcion_patologia.estado = true;
    },
  },
};
</script>

<style></style>
