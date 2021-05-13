import { createStore } from "vuex";
import tutorial from '../store/modules/tutorial'
import sections from "../store/modules/sections";

export default createStore({
    modules:{tutorial, sections}
})
