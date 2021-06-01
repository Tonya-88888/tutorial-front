import { request } from "./generic.service";

const getAllUser = () => request({ url: `users`, method: "get" });
const getUser = (id) => request({ url: `users/${id}`, method: "get", id });
const addUser = (data) => request({ url: `users`, method: "post", data });
const deleteUser = (id) => request({ url: `users/${id}`, method: "delete" });

export {  getUser, addUser, deleteUser, getAllUser };
