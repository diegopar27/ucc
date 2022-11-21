import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getPacientes({ commit }) {
      try {
        const RES = await postData({
          url: `patient/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getPaciente({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `patient/${id}`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putPaciente({ commit }, { id, data }) {
      try {
        console.log(id);
        const RES = await postData({
          url: `patient/${id}/`,
          header: {},
          method: "PUT",
          data,
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _addPaciente({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `patient/`,
          header: {},
          data,
          method: "POST",
        });
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _addPacientexFamily({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `patientxfamily/`,
          header: {},
          data,
          method: "POST",
        });
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getPacientesXFamily({ commit }, { id_patient }) {
      try {
        const RES = await postData({
          url: `patientxfamily/${id_patient}/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
