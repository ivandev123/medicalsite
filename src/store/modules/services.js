import {getServices, getSubcategories} from "@/api";

export default {
  namespaced: true,
  state: {
    services: [],
    subcategories: [],
  },
  actions: {
    getServices({ commit }) {
      getServices().then(response => commit('SET_SERVICES', response))
    },
    getSubcategories({ commit }) {
      getSubcategories().then(response => commit('SET_SUBCATEGORIES', response))
    }
  },
  mutations: {
    SET_SERVICES(state, services) {
      state.services = services
    },
    SET_SUBCATEGORIES(state, subcategories) {
      state.subcategories = subcategories
    }
  }
}