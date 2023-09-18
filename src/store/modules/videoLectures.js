import {getVideoLectures} from "@/api";

export default {
  namespaced: true,
  state: {
    videoLectures: []
  },
  actions: {
    getVideoLectures({ commit }, page) {
      getVideoLectures(page).then(response => commit('SET_VIDEO_LECTURES', response))
    }
  },
  mutations: {
    SET_VIDEO_LECTURES(state, videoLectures) {
      state.videoLectures = videoLectures
    }
  }
}