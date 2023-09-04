import * as API from "@/api";

export default {
  namespaced: true,
  state: {
    blogArticles: [],
    blogArticle: {},
  },
  actions: {
    getBlogArticles({ commit }) {
      API.getBlogArticles().then(response => commit('SET_BLOG_ARTICLES', response))
    },
    getBlogArticle({ commit }, blogArticleId) {
      API.getBlogArticle(blogArticleId).then(response => commit('SET_BLOG_ARTICLE', response))
    }
  },
  mutations: {
    SET_BLOG_ARTICLES(state, blogArticles) {
      state.blogArticles = blogArticles
    },
    SET_BLOG_ARTICLE(state, blogArticle) {
      state.blogArticle = blogArticle
    }
  }
}