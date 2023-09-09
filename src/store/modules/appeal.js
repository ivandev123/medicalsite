import {getAppeal} from "@/api";

export default {
  namespaced: true,
  state: {
    appeal: {}
  },
  actions: {
    getAppeal({ commit }) {
      getAppeal().then(response => commit('SET_APPEAL', response))
    }
  },
  mutations: {
    SET_APPEAL(state, appeal) {
      state.appeal = appeal
    }
  }
}