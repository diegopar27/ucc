import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getSuenos({ commit }) {
      try {
        const RES = await postData({
          url: `dreamdream/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getSueno({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `dreamdream/${id}`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putSuenos({ commit }, { id, data }) {
      try {
        console.log(id);
        const RES = await postData({
          url: `dreamdream/${id}/`,
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
    async _addSuenos({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `dreamdream/`,
          header: {},
          data,
          method: "POST",
        });
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _addSuenosXPaciente({ commit }, { date }) {
      try {
        console.log(date);
        const RES = await postData({
          url: `patientxdreamspatientxdream/`,
          header: {},
          data: date,
          method: "POST",
        });
        console.log(RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
