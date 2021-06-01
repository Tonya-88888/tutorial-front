import { createStore } from "vuex";
import tutorial from '../store/modules/tutorial'
import sections from "../store/modules/sections";
import quiz from "../store/modules/quiz";
import user from "../store/modules/user";

export default createStore({
  modules: { tutorial, sections, quiz, user, },
});
