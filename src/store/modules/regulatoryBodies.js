import {getRegulatoryBodies} from "@/api";

export default {
  namespaced: true,
  state: {
    regulatoryBodies: {},
  },
  actions: {
    getRegulatoryBodies({ commit }) {
      getRegulatoryBodies().then(response => commit('SET_REGULATORY_BODIES', response))
    }
  },
  mutations: {
    SET_REGULATORY_BODIES(state, regulatoryBodies) {
      state.regulatoryBodies = regulatoryBodies
    }
  }
}