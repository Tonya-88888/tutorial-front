import { request } from "./generic.service";

const getAllQuiz = () => request({ url: `quiz/`, method: "get" });
const getQuizBySectionId = (id) =>
  request({ url: `quiz/section/${id}`, method: "get" });
const getQuizById = (id) => request({ url: `quiz/${id}`, method: "get" });
const addQuiz = (data) => request({ url: `quiz`, method: "post", data });
const updateQuiz = (id, data) =>
  request({ url: `quiz/${id}`, method: "put", data });
const deleteQuiz = (id) => request({ url: `quiz/${id}`, method: "delete" });

export {
  getQuizById,
  addQuiz,
  updateQuiz,
  deleteQuiz,
  getAllQuiz,
  getQuizBySectionId,
};
