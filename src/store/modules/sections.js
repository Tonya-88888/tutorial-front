import {
  getAllSection,
  addSection,
  updateSection,
  deletelSection,
} from "../../services/section.service";
import { getAllTutorial } from "../../services/tutorial.service";
export default {
  actions: {
    async fetchSection(ctx, id) {
      await getAllSection(id).then((result) => {
        ctx.commit("getSection", result);
      });
    },
    async createSection(ctx, data) {
      await addSection(data).then((result) => {
        ctx.commit("addSection", result);
      });
    },
    async updateSection(ctx, data) {
      await updateSection(data.id, {
        content: data.content,
      }).then((result) => {
        console.log(result);
      });
    },
    async deletelSection(ctx, id) {
      await deletelSection(id).then((result) => {
        alert(result.message);
      });
 
    },
  },
  mutations: {
    getSection(state, sections) {
      state.sections = sections;
    },
    addSection(state, data) {
      state.currSectionId = data._id;
      state.sections.push(data);
    },
    
  },
  state: {
    sections: [{ name: "учебник пуст", _id: "1" }],
    currSectionId: "0",
  },
  getters: {
    getSection(state) {
      return state.sections;
    },
    getCurrSectionId(state) {
      return state.currSectionId;
    },
    getCurrSection: (state) => (id) => {
      return state.sections.find((section) => section._id === id);
    },
    getSectionLen(state) {
      return state.sections.lenght;
    },
  },
};
