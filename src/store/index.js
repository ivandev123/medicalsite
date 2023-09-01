import { createStore } from 'vuex'
import services from "@/store/modules/services";
import specialists from "@/store/modules/specialists";

export default createStore({
  modules: {
    services,
    specialists,
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
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
})
