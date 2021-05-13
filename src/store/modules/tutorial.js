import { getAllTutorial } from "../../services/tutorial.service";
export default {
  actions: {
    async fetchTutorial(ctx) {
      getAllTutorial().then((result) => {
        ctx.commit("updateTutorial", result);
      });
    },
  },
  mutations: {
    updateTutorial(state, tutorials) {
      state.tutorials = tutorials;
    },
  },
  state: {
    tutorials: [{ name: "учебников нет", _id: "1" }],
  },
  getters: {
    getTutorial(state) {
      return state.tutorials;
    },
  },
};
