import {getMassMediaAboutUs} from "@/api";

export default {
  namespaced: true,
  state: {
    media: []
  },
  actions: {
    getMassMediaAboutUs({ commit }) {
      getMassMediaAboutUs().then(response => commit('SET_MEDIA', response))
    }
  },
  mutations: {
    SET_MEDIA(state, media) {
      state.media = media
    }
  }
}