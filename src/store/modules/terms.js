import {getTerms} from "@/api";

export default {
  namespaced: true,
  state: {
    terms: {}
  },
  actions: {
    getTerms({ commit }) {
      getTerms().then(response => commit('SET_TERMS', response))
    }
  },
  mutations: {
    SET_TERMS(state, terms) {
      state.terms = terms
    }
  }
}