import { request } from "./generic.service";

const getAllQwiz = (id) => request({ url: `qwiz/${id}`, method: "get" });
const getQwizBySectionId = (id) => request({ url: `qwiz`, method: "get", id });
const getQwizById = (id) => request({ url: `qwiz/${id}`, method: "get" });
const addQwiz = (data) => request({ url: `qwiz`, method: "post", data });
const updateQwiz = (id, data) =>
  request({ url: `qwiz/${id}`, method: "put", data });
const deleteQwiz = (id) => request({ url: `qwiz/${id}`, method: "delete" });

export {
  getQwizById,
  addQwiz,
  updateQwiz,
  deleteQwiz,
  getAllQwiz,
  getQwizBySectionId,
};
