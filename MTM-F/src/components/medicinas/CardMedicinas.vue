<template>
  <v-dialog v-model="medicina.estado" max-width="500">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Pacientes</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="medicina.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-row justify="start">
          <v-col cols="7" class="my-0 py-1"><h3>Nombre medicamento</h3> </v-col>
          <v-col cols="5" class="my-0 py-1">
            <h7> {{ medicina.medication_name }} </h7>
          </v-col>
          <v-col cols="7" class="my-0 py-1"><h3>Cantidad</h3> </v-col>
          <v-col cols="5" class="my-0 py-1">
            <h7>
              {{ medicina.amount }}
            </h7>
          </v-col>
          <v-col cols="7" class="my-0 py-1"><h3>Formula médica</h3> </v-col>
          <v-col cols="5" class="my-0 py-1">
            <h7>
              {{ medicina.medication_formula }}
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
    medicina: Object,
  },
};
</script>

<style></style>
