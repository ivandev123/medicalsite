import { createStore } from 'vuex'
import services from "@/store/modules/services";
import specialists from "@/store/modules/specialists";
import blog from "@/store/modules/blog";

export default createStore({
  modules: {
    services,
    specialists,
    blog,
  },
  state: {
    months: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
})
