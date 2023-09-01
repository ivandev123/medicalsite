import { getServices } from "@/api";

export default {
  namespaced: true,
  state: {
    services: [],
  },
  actions: {
    getServices({ commit }) {
      getServices().then(response => commit('SET_SERVICES', response))
    }
  },
  mutations: {
    SET_SERVICES(state, services) {
      state.services = services
    }
  }
}