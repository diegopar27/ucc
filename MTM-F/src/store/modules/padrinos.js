import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getPadrinos({ commit }) {
      try {
        const RES = await postData({
          url: `godfather/`,
          header: {},
          method: "GET",
        });
        console.log("res", RES);
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getPadrino({ commit }, { id }) {
      try {
        const RES = await postData({
          url: `godfather/${id}/`,
          header: {},
          method: "GET",
        });

        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _putPadrino({ commit }, { id, data }) {
      console.log(id, data);
      try {
        const RES = await postData({
          url: `godfather/${id}/`,
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
    async _addPadrino({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `godfather/`,
          header: {},
          data,
          method: "POST",
        });
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _addPadrinoXPaciente({ commit }, { data }) {
      try {
        const RES = await postData({
          url: `patientxgodfather/`,
          header: {},
          data,
          method: "POST",
        });
        return RES;
      } catch (error) {
        console.error(error);
      }
    },
    async _getPadrinoXPaciente({ commit }, { id }) {
      try {
        console.log("este es el id", id);
        const RES = await postData({
          url: `patientxgodfather/${id}/`,
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
