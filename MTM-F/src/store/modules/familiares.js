import postData from "@/http";

export default {
  namespaced: true,
  state: {},
  actions: {
    async _getFamiliares({ commit }) {
      try {
        const RES = await postData({
          url: `family/`,
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
          url: `family/${id}`,
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
          url: `family/${id}/`,
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
        console.log("heihaskjdhfkshfu");
        const RES = await postData({
          url: `family/`,
          header: {},
          data,
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
