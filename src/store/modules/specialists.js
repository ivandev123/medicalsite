import { getSpecialists } from "@/api";

export default {
  namespaced: true,
  state: {
    specialists: [],
  },
  actions: {
    getSpecialists({ commit }) {
      getSpecialists().then(response => commit('SET_SPECIALISTS', response))
    }
  },
  mutations: {
    SET_SPECIALISTS(state, specialists) {
      state.specialists = specialists
    }
  }
}