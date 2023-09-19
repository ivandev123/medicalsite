import {getServiceById, getServices, getSubcategories} from "@/api";

export default {
  namespaced: true,
  state: {
    services: [],
    service: {},
    subcategories: [],
  },
  actions: {
    getServices({ commit }, page) {
      getServices(page).then(response => commit('SET_SERVICES', response))
    },
    getServiceById({ commit }, id) {
      getServiceById(id).then(response => commit('SET_SERVICE', response))
    },
    getSubcategories({ commit }) {
      getSubcategories().then(response => commit('SET_SUBCATEGORIES', response))
    }
  },
  mutations: {
    SET_SERVICES(state, services) {
      state.services = services
    },
    SET_SERVICE(state, service) {
      state.service = service
    },
    SET_SUBCATEGORIES(state, subcategories) {
      state.subcategories = subcategories
    }
  }
}