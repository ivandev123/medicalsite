import {getSeo} from "@/api";

export default {
  namespaced: true,
  state: {
    seo: {}
  },
  actions: {
    getSeo({ commit }) {
      getSeo().then(response => {
        console.log('response', response)
        commit('SET_SEO', response)
      })
    }
  },
  mutations: {
    SET_SEO(state, seo) {
      state.seo = seo
    }
  }
}