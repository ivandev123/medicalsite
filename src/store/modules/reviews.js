import {getTextReviews, getVideoReviews} from "@/api";

export default {
  namespaced: true,
  state: {
    reviews: {
      text: [],
      video: [],
    }
  },
  actions: {
    getTextReviews({ commit }, page = 1) {
      getTextReviews(page).then(response => commit('SET_TEXT_REVIEWS', response))
    },
    getVideoReviews({ commit }, page = 1) {
      getVideoReviews(page).then(response => commit('SET_VIDEO_REVIEWS', response))
    }
  },
  mutations: {
    SET_TEXT_REVIEWS(state, reviews) {
      state.reviews.text = reviews
    },
    SET_VIDEO_REVIEWS(state, reviews) {
      state.reviews.video = reviews
    }
  }
}