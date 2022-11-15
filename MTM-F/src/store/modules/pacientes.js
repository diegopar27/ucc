import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getPacientes({ commit }) {
      try {
        const RES = await postData({
          url: `patientepspatientxeps/`,
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
          url: `patientepspatientxeps/${id}`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putPaciente({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `patientepspatientxeps/${id}`,
          header: {},
          method: "PUT",
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
          url: `patientepspatientxeps/`,
          header: {},
          data,
          method: "POST",
        });
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
