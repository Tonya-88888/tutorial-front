import { request } from "./generic.service";

const getAllSection = (id) => request({ url: `sections/tutorial/${id}`, method: "get" });
const AllSection = (id) => request({ url: `sections`, method: "get", id });
const getlSection = (id) => request({ url: `sections`, method: "get", id });
const addSection = (data) => request({ url: `sections`, method: "post", data });
const updateSection = (id, data) =>  request({ url: `sections/${id}`, method: "put", data });
const deletelSection = (id) =>
  request({ url: `sections/${id}`, method: "delete" });

export { getlSection, addSection,updateSection, deletelSection, getAllSection, AllSection };
