import postData from "@/http";

export default {
  namespaced: true,
  state: {
    paciente: null,
  },
  actions: {
    async _getPadrinos({ commit }) {
      try {
        const RES = await postData({
          url: `godfathergodfather/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async getPaciente({ commit }, { id }) {
      try {
        const respuesta = await postData({
          url: `Patients/listpatients/${id}`,
          header: {},
          method: "GET",
        });
        console.log("res", respuesta);
        return respuesta;
      } catch (error) {
        console.error(error);
      }
    },
    async crearPaciente({ commit }, { data }) {
      try {
        const respuesta = await postData({
          url: `Patients/listpatients/`,
          header: {},
          data,
          method: "POST",
        });
        return respuesta;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
