import {getCategories, getCategoryById, getSubcategoryById} from "@/api";

export default {
    namespaced: true,
    state: {
        categories: [],
        category: {},
        subcategory: {},
    },
    actions: {
        getCategories({ commit }) {
            getCategories().then(response => commit('SET_CATEGORIES', response))
        },
        getCategoryById({ commit }, categoryId) {
            getCategoryById(categoryId).then(response => commit('SET_CATEGORY', response))
        },
        getSubcategoryById({ commit }, subcategoryId) {
            getSubcategoryById(subcategoryId).then(response => commit('SET_SUBCATEGORY', response))
        }
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        SET_CATEGORY(state, category) {
            state.category = category
        },
        SET_SUBCATEGORY(state, subcategory) {
            state.subcategory = subcategory
        }
    }
}