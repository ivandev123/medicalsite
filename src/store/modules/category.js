import {getCategories} from "@/api";

export default {
    namespaced: true,
    state: {
        categories: []
    },
    actions: {
        getCategories({ commit }) {
            getCategories().then(response => commit('SET_CATEGORIES', response))
        }
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        }
    }
}