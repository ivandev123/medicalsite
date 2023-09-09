import {getAdditionalServices} from "@/api";

export default {
  namespaced: true,
  state: {
    additionalServices: [],
  },
  actions: {
    getAdditionalServices({ commit }) {
      getAdditionalServices().then(response => commit('SET_ADDITIONAL_SERVICES', response))
    }
  },
  mutations: {
    SET_ADDITIONAL_SERVICES(state, additionalServices) {
      state.additionalServices = additionalServices
    }
  }
}