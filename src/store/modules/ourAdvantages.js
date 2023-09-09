import { getAdvantages } from "@/api";

export default {
  namespaced: true,
  state: {
    advantages: []
  },
  actions: {
    getAdvantages({ commit }) {
      getAdvantages().then(response => commit('SET_ADVANTAGES', response))
    }
  },
  mutations: {
    SET_ADVANTAGES(state, advantages) {
      state.advantages = advantages
    }
  }
}