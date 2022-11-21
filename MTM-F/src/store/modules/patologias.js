import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getPatologia({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `Pathology/${id}/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getPatologias({ commit }) {
      try {
        const RES = await postData({
          url: `Pathology/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putPatologia({ commit }, { id, data }) {
      try {
        const RES = await postData({
          url: `Pathology/${id}/`,
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
    async _addPatologia({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `Pathology/`,
          header: {},
          data,
          method: "POST",
        });
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _addPatologiaXPaciente({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `Pathologyxpatient/`,
          header: {},
          data,
          method: "POST",
        });
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getPatologiaXPaciente({ commit }, { id_patient }) {
      try {
        console.log("este es el id", id_patient);
        const RES = await postData({
          url: `Pathologyxpatient/${id_patient}/`,
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
