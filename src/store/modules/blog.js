import * as API from "@/api";
import {addBlogArticleComment, getBlogArticleCommentsById} from "@/api";

export default {
  namespaced: true,
  state: {
    blogArticles: [],
    blogArticle: {},
    comments: [],
  },
  actions: {
    getBlogArticles({ commit }) {
      API.getBlogArticles().then(response => commit('SET_BLOG_ARTICLES', response))
    },
    getBlogArticle({ commit }, blogArticleId) {
      API.getBlogArticle(blogArticleId).then(response => commit('SET_BLOG_ARTICLE', response))
    },
    getBlogArticleCommentsById({ commit }, blogId) {
      getBlogArticleCommentsById(blogId).then(response => commit('SET_COMMENTS', response))
    },
    addBlogArticleComment({ commit }, comment) {
      addBlogArticleComment(comment).then(response => commit('ADD_COMMENT', response))
    }
  },
  mutations: {
    SET_BLOG_ARTICLES(state, blogArticles) {
      state.blogArticles = blogArticles
    },
    SET_BLOG_ARTICLE(state, blogArticle) {
      state.blogArticle = blogArticle
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments
    },
    ADD_COMMENT(state, comment) {
      state.blogArticle.comments_count++
      state.comments.push(comment)
    }
  }
}