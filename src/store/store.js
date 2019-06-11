import Vue from 'vue';
import Vuex from 'vuex';

// import the objects from the modules
import users from './modules/users';
import partners from './modules/partners';
import snackbar from './modules/snackbar';

Vue.use(Vuex);

export default new Vuex.Store({
  // include modules in central store
  modules: {
    users,
    partners,
    snackbar
  }
});