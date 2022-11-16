import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getFamiliar({ commit }) {
      try {
        const RES = await postData({
          url: `patientfamiliar/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getFamiliar({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `patientfamiliar/${id}`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putFamiliar({ commit }, { id, data }) {
      try {
        console.log(id);
        const RES = await postData({
          url: `patientfamiliar/${id}/`,
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
    async _addFamiliar({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `patientfamiliar/`,
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