import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getEps({ commit }) {
      try {
        const RES = await postData({
          url: `eps/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getEpsId({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `eps/${id}/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putEps({ commit }, { id, data }) {
      try {
        const RES = await postData({
          url: `eps/${id}/`,
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
    async _addEps({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `eps/`,
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
