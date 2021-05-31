import {
  getQuizById,
  addQuiz,
  updateQuiz,
  deleteQuiz,
  getAllQuiz,
  getQuizBySectionId,
} from "../../services/quiz.service";

export default {
  actions: {
    async fetchQuiz(ctx, id) {
      await getAllQuiz().then((result) => {
        ctx.commit(" setQuiz", result);
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
    setQuiz(state, sections) {
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

    getCurrSection: (state) => (id) => {
      return state.sections.find((section) => section._id === id);
    },
  },
};
