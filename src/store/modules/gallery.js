import {getPhotoGallery} from "@/api";

export default {
  namespaced: true,
  state: {
    gallery: []
  },
  actions: {
    getPhotoGallery({ commit }) {
      getPhotoGallery().then(response => commit('SET_GALLERY', response))
    }
  },
  mutations: {
    SET_GALLERY(state, gallery) {
      state.gallery = gallery
    }
  }
}