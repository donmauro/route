import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      customerName: 'donMauro'
  },
  mutations: {
      setCustomerName(state, name) {
          state.customerName = name
      }
  },
  actions: {}
});