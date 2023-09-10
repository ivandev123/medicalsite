import {getChambersInOurClinic} from "@/api";

export default {
  namespaced: true,
  state: {
    chambers: []
  },
  actions: {
    getChambersInOurClinic({ commit }) {
      getChambersInOurClinic().then(response => commit('SET_CHAMBERS', response))
    }
  },
  mutations: {
    SET_CHAMBERS(state, chambers) {
      state.chambers = chambers
    }
  }
}