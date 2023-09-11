import {getRegions} from "@/api";

export default {
  namespaced: true,
  state: {
    regions: []
  },
  actions: {
    getRegions({ commit }) {
      getRegions().then(response => commit('SET_REGIONS', response))
    }
  },
  mutations: {
    SET_REGIONS(state, regions) {
      state.regions = regions
    }
  }
}