import {getStock, getStocks} from "@/api";

export default {
  namespaced: true,
  state: {
    stocks: [],
    stock: {},
  },
  actions: {
    getStocks({ commit }, page) {
      getStocks(page).then(response => commit('SET_STOCKS', response))
    },
    getStock({ commit }, id) {
      getStock(id).then(response => commit('SET_STOCK', response))
    }
  },
  mutations: {
    SET_STOCKS(state, stocks) {
      state.stocks = stocks
    },
    SET_STOCK(state, stock) {
      state.stock = stock
    }
  }
}