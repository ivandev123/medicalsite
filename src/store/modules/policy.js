import {getPolicy} from "@/api";

export default {
  namespaced: true,
  state: {
    policy: {}
  },
  actions: {
    getPolicy({ commit }) {
      getPolicy().then(response => commit('SET_POLICY', response))
    }
  },
  mutations: {
    SET_POLICY(state, policy) {
      state.policy = policy
    }
  }
}