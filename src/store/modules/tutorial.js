//action получает объект, commit вызывает mutation, mutation изменяет state,  getters возврвщает состояние компоненту
import {
  getAllTutorial,
  addTutorial,
  deleteTutorial,
} from "../../services/tutorial.service";
export default {
  actions: {
    async fetchTutorial(ctx) {
      await getAllTutorial().then((result) => {
        ctx.commit("updateTutorial", result);
      });
    },
    async createTutorial(ctx, data) {
      await addTutorial(data).then((result) => {
        // console.log("getters" + result._id); // result - аргумент resolve
        ctx.commit("addTutorial", result);
      });
    },
    async deleteTutorial(ctx, id) {
      await deleteTutorial(id).then((result) => {
        alert(result.message);
      });
    },
  },
  mutations: {
    updateTutorial(state, tutorials) {
      state.tutorials = tutorials.reverse();
    },
    addTutorial(state, data) {
      state.newId = data._id;
      state.tutorials.unshift(data);
    },
  },
  state: {
    tutorials: [{ name: "учебников нет" }],
    newId: "0",
  },
  getters: {
    getTutorial(state) {
      return state.tutorials;
    },
    getTutorialId(state) {
      return state.newId;
    },
    GetFirsTutorial(state){
      return state.tutorials[0];
    }
  },
};
