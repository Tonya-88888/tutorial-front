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
    async fetchQuiz(ctx) {
      await getAllQuiz().then((result) => {
        ctx.commit("setQuiz", result);
      });
    },
    async addQuiz(ctx, data) {
      await addSection(data).then((result) => {
        ctx.commit("addSection", result);
      });
    },
    async updateQuiz(ctx, data) {
      await updateQuiz(data.id, data.value).then((result) => {});
    },
    async deleteQuiz(ctx, id) {
      await deleteQuiz(id).then((result) => {
        alert(result.message);
      });
    },
  },
  mutations: {
    setQuiz(state, quiz) {
      state.quiz = quiz;
    },
    addQuiz(state, data) {
      state.currQuizId = data._id;
      state.quiz.push(data);
    },
  },
  state: {
    quiz: [],
    currQuizId: "0",
  },
  getters: {
    getQuiz(state) {
      return state.quiz;
    },
    getQuizBySectionId: (state) => (id) => {

      return state.quiz.filter((quiz) => quiz.id_Section === id);
    },
  },
};
