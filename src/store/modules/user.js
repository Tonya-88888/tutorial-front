//action получает объект, commit вызывает mutation, mutation изменяет state,  getters возврвщает состояние компоненту
import {
  getAllUser,
  getUser,
  addUser,
  deleteUser,
} from "../../services/user.service";
export default {
  actions: {
    async fetchUsers(ctx) {
      await getAllUser().then((result) => {
        ctx.commit("setUser", result);
      });
    },
    async createUser(ctx, data) {
      await addTutorial(data).then((result) => {
        // console.log("getters" + result._id); // result - аргумент resolve
        ctx.commit("addTutorial", result);
      });
    },
  },
  mutations: {
    setUser(state, data) {
      state.users = data;
    },
  },
  state: {
    users: [{}],
  },
  getters: {
    getUsers(state) {
      return state.users;
    },

    getUserById: (state) => (id) => {
      return state.users.find((user) => user._id === id);
    },
  },
};
