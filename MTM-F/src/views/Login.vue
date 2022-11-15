<template>
  <v-app>
    <v-container class="fill-height mx-auto" fluid>
      <v-card class="elevation-12 mx-auto" width="500">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="12" lg="12">
            <h1 class="text-center primary--text">Iniciar sesión</h1>
            <h4 class="text-center mb-2">Mujeres trabajando por el meta</h4>
            <v-form ref="form" v-model="valid" lazy-validation id="form">
              <v-card-text class="mt-12">
                <v-row justify="center">
                  <v-col cols="8">
                    <v-text-field label="Email" required solo prepend-icon="mdi-account" type="email" color="primary" v-model="usuario" />
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      prepend-icon="mdi-account-lock-open-outline"
                      v-model="contraseña"
                      label="Password"
                      name="password"
                      type="password"
                      color="primary"
                      id="password"
                      required
                      solo
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-form>
            <div class="text-center my-5">
              <v-btn color="primary" :disabled="!valid" v-on:click="login()">Iniciar sesión</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      value1: "",
      valid: false,
      usuario: "",
      contraseña: "",
    };
  },
  methods: {
    ...mapActions({
      LOGIN: "usuario/loginUsuario",
      GETHISTORIAS: "usuario/gethistorias",
    }),

    async login() {
      this.$refs.form.validate();
      let data = {
        usuario: this.usuario,
        password: this.contraseña,
      };
      let res = await this.LOGIN({ data });
      if (res) {
        sessionStorage.usuario = JSON.stringify(res);
        return this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
