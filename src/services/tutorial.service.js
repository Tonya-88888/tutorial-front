import { request } from "./generic.service";

const getAllTutorial = () => request({ url: `tutorials`, method: "get"});
const getTutorial = (id) =>
  request({ url: `tutorials/${id}`, method: "get", id });
const addTutorial = (data) => request({ url: `tutorials`, method: "post", data });
const deleteTutorial = (id) =>
  request({ url: `tutorials/${id}`, method: "delete"});

export { getTutorial, addTutorial, deleteTutorial, getAllTutorial };
