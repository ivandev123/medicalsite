import {getHowItWork} from "@/api";

export default {
  namespaced: true,
  state: {
    howItWork: []
  },
  actions: {
    getHowItWork({ commit }) {
      getHowItWork().then(response => commit('SET_HOW_IT_WORK', response))
    }
  },
  mutations: {
    SET_HOW_IT_WORK(state, howItWork) {
      state.howItWork = howItWork
    }
  }
}