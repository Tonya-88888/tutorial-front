//action получает объект, commit вызывает mutation, mutation изменяет state,  getters возврвщает состояние компоненту
import { createStore } from "vuex";
import { addUser, getUser } from "../../services/user.service";

const mutations = {
  fetchUser(state, user) {
    state.user = user;
  },
  setUserError(state, error) {
    state.userError = error;
  },
};

const action = {
  async setUser({ commit }, data = {}) {
    try {
      const user = await addUser(data);
      commit("fetchUser", user);
    } catch (error) {
      commit("setUserError", err);
    }
  },
};

const getters = {
  user: ({ user }) => user,
  userError: ({ userError }) => userError,
};

const state = () => ({
  user: {},
  userError: null,
});

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
