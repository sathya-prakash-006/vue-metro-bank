// Vuex store that contains all the modules

import Vue from "vue";
import Vuex from "vuex";

import Counter from "./modules/auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Counter,
  },
});
