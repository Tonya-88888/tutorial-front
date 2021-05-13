import { request } from "./generic.service";

const getAllSection = (id) => request({ url: `sections/tutorial/${id}`, method: "get" });
const AllSection = (id) => request({ url: `sections`, method: "get", id });
const getlSection = (id) => request({ url: `sections`, method: "get", id });
const addlSection = (data) => request({ url: `sections`, method: "post", data });
const deletelSection = (id) => request({ url: `sections`, method: "post", id });

export { getlSection, addlSection, deletelSection, getAllSection, AllSection };
