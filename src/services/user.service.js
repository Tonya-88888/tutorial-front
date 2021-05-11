import { request } from "./generic.service";

const getUser = (id) =>
  request({ url: `users/${id}`, method: "get" });
const addUser = (data) => request({ url: `users`, method: "post", data });

export { getUser, addUser };
