import { getAllSection } from "../../services/section.service";
import { getAllTutorial } from "../../services/tutorial.service";
export default {
  actions: {
    async fetchSection(ctx, id) {
      getAllSection(id).then((result) => {
        ctx.commit("updateSection", result);
      });
    },
  },
  mutations: {
    updateSection(state, sections) {
      state.sections = sections;
    },
  },
  state: {
    sections: [{ name: "учебник пуст", _id: "1" }],
  },
  getters: {
    getSection(state) {
      return state.sections;
    },
  },
};
