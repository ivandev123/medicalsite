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
import regulatoryBodies from "@/store/modules/regulatoryBodies";
import policy from "@/store/modules/policy";
import terms from "@/store/modules/terms";
import helpfulInfo from "@/store/modules/helpfulInfo";
import contacts from "@/store/modules/contacts";
import region from "@/store/modules/region";
import appeal from "@/store/modules/appeal";

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
    regulatoryBodies,
    policy,
    terms,
    helpfulInfo,
    contacts,
    region,
    appeal,
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
