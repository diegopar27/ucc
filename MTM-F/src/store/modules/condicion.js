import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getConditions({ commit }) {
      try {
        const RES = await postData({
          url: `condition/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getCondition({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `condition/${id}`,
          header: {},
          method: "GET",
        });

        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putCondition({ commit }, { id, data }) {
      try {
        const RES = await postData({
          url: `condition/${id}/`,
          header: {},
          method: "PUT",
          data,
        });

        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _addCondition({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `condition/`,
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
