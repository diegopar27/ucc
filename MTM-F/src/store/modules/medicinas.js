import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getMedicinas({ commit }) {
      try {
        const RES = await postData({
          url: `Medicine/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getMedicina({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `Medicine/${id}`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putMedicina({ commit }, { id, data }) {
      try {
        const RES = await postData({
          url: `Medicine/${id}/`,
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
    async _addMedicina({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `Medicine/`,
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
