import { createStore } from 'vuex'
import services from "@/store/modules/services";
import specialists from "@/store/modules/specialists";
import blog from "@/store/modules/blog";
import stocks from "@/store/modules/stocks";
import ourAdvantages from "@/store/modules/ourAdvantages";
import howItWork from "@/store/modules/howItWork";
import additionalServices from "@/store/modules/additionalServices";
import videoLectures from "@/store/modules/videoLectures";
import media from "@/store/modules/media";
import gallery from "@/store/modules/gallery";
import chambers from "@/store/modules/chambers";

export default createStore({
  modules: {
    services,
    specialists,
    blog,
    stocks,
    ourAdvantages,
    howItWork,
    additionalServices,
    videoLectures,
    media,
    gallery,
    chambers,
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
