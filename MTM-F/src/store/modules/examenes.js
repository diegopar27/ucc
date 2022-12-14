import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getExamenes({ commit }) {
      try {
        const RES = await postData({
          url: `Exams/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getExamen({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `Exams/${id}/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putExamen({ commit }, { id, data }) {
      try {
        const RES = await postData({
          url: `Exams/${id}/`,
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
    async _addExamen({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `Exams/`,
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
