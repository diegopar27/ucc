import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getPatologias({ commit }) {
      try {
        const RES = await postData({
          url: `pathology/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getPatologia({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `pathology/${id}`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putPatologia({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `pathology/${id}`,
          header: {},
          method: "PUT",
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
          url: `pathology/`,
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
