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
          <v-col cols="4" class="my-0 py-1"><h3>Departamento</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ padrino.department }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Ciudad</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ padrino.city }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Tiempo en la Fundación</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>{{ edad }} Años</h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Estrato</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ padrino.stratum }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Correo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ padrino.mail }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Tiempo en Fundación</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ padrino.time_sponsoring }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Genero</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ padrino.gender }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Nivel educativo</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ padrino.education_level }}
            </h5>
          </v-col>
          <v-col cols="4" class="my-0 py-1"><h3>Dirección</h3> </v-col>
          <v-col cols="8" class="my-0 py-1">
            <h5>
              {{ padrino.direction }}
            </h5>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment";
export default {
  props: {
    padrino: Object,
  },
  mounted() {
    console.log(this.padrino);
  },
  computed: {
    edad() {
      let fecha_actual = moment().locale("es");
      let fecha_hoy = fecha_actual.format("DD-MM-YYYY");
      let hoy = fecha_hoy.slice(6);
      let edad = fecha_hoy.slice(6) - this.padrino.date_joined.slice(0, 4);
      let mes = Number(fecha_hoy.slice(3, 5)) - Number(this.padrino.date_joined.slice(3, 5));

      if (mes < 0 || (mes === 0 && Number(fecha_hoy.slice(0, 2)) < Number(this.padrino.date_joined.slice(8)))) {
        edad--;
      }
      return edad;
    },
  },
};
</script>

<style></style>
