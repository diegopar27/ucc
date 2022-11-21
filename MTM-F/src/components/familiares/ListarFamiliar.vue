<template>
  <v-dialog v-model="asignar_familia.estado">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Asignar familiar a {{ asignar_familia.names_paciente }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="asignar_familia.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container fluid class="fill-height">
        <v-row>
          <v-col cols="4">
            <v-text-field class="pt-4 pl-4" outlined dense v-model="search" label="Buscar" />
          </v-col>
          <v-col cols="8" class="text-end">
            <v-btn class="mt-4 mr-4" color="success" dark large @click="familiarop.estado = true"> Agregar familiar </v-btn>
          </v-col>
          <v-col cols="12" class="text-end">
            <template>
              <v-data-table :search="search" :headers="headers" :items="familiares" item-key="id" :items-per-page="5" class="elevation-1">
                <template v-slot:[`item.actions`]="{ item }">
                  <v-icon small color="primary" class="mr-2" @click="verFamiliar(item)"> mdi-book </v-icon>
                  <v-icon small color="warning" class="mr-2" @click="editFamiliar(item)"> mdi-pencil </v-icon>
                </template>
              </v-data-table>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <FAMILIAROP :familiar="familiarop" v-if="familiarop.estado"></FAMILIAROP>
    <FAMILIAR :familiar="familiar" v-if="familiar.estado"></FAMILIAR>
  </v-dialog>
</template>
<script>
import popapFamiliares from "../familiares/CardFamiliares.vue";
import OpcionFamiliares from "../familiares/OpcionFamiliares.vue";
import { mapActions } from "vuex";

export default {
  props: {
    asignar_familia: Object,
  },
  components: {
    FAMILIAR: popapFamiliares,
    FAMILIAROP: OpcionFamiliares,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "names",
      },
      {
        text: "Apellido",
        align: "center",
        sortable: false,
        value: "surnames",
      },
      {
        text: "Email",
        align: "center",
        sortable: false,
        value: "mail",
      },
      {
        text: "Genero",
        align: "center",
        sortable: false,
        value: "gender",
      },
      {
        text: "Teléfono",
        align: "center",
        sortable: false,
        value: "phone",
      },
      {
        text: "Dirección",
        align: "center",
        sortable: false,
        value: "direction",
      },

      { text: "Actions", value: "actions", sortable: false },
    ],
    familiar: {
      estado: false,
    },
    familiarop: {
      estado: false,
    },
    familiares: [],
  }),
  async mounted() {
    console.log(this.asignar_familia);
    const id_patient = this.asignar_familia.id_paciente;
    const familiar_x = await this._getPacientesXFamily({ id_patient });
    console.log(familiar_x.id_family);
    const id = familiar_x.id_family;
    // this.familiares = await this._getFamiliares()
    this.familiares.push(await this._getFamiliar({ id }));
    console.log(this.familiares);
  },
  methods: {
    ...mapActions({
      _getFamiliar: "familiares/_getFamiliar",
      _getFamiliares: "familiares/_getFamiliares",
      _getPacientesXFamily: "pacientes/_getPacientesXFamily",
    }),
    editFamiliar(item) {
      this.familiarop.names = item.names;
      this.familiarop.surnames = item.surnames;
      this.familiarop.age = item.age;
      this.familiarop.birth_date = item.birth_date;
      this.familiarop.direction = item.direction;
      this.familiarop.education_level = item.education_level;
      this.familiarop.gender = item.gender;
      this.familiarop.mail = item.mail;
      this.familiarop.nui = item.nui;
      this.familiarop.phone = item.phone;
      this.familiarop.marital_status = item.marital_status;
      this.familiarop.occupation = item.occupation;
      this.familiarop.background = item.background;
      this.familiarop.comptetencies = item.comptetencies;
      this.familiarop.id = item.id;

      this.familiarop.estado = true;
      this.familiarop.editar = true;
    },
    verFamiliar(item) {
      this.familiar.edad = item.age;
      this.familiar.cumpleanos = item.birth_date;
      this.familiar.direccion = item.direction;
      this.familiar.educacion = item.education_level;
      this.familiar.genero = item.gender;
      this.familiar.correo = item.mail;
      this.familiar.nombre = item.names;
      this.familiar.occupation = item.occupation;
      this.familiar.telefono = item.phone;
      this.familiar.apellidos = item.surnames;
      this.familiar.estado = true;
    },
  },
};
</script>
