import { request } from "./generic.service";

const getTutorial = (id) => request({ url: `tutorials`, method: "get", id});
const addTutorial = (data) => request({ url: `tutorials`, method: "post", data });
const deleteTutorial = (id) => request({ url: `tutorials`, method: "post", data });

export { getTutorial, addTutorial, deleteTutorial };
