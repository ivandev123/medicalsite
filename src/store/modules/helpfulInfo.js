import {getInformation, getInformationOrganizations, getInformationSchedule} from "@/api";

export default {
  namespaced: true,
  state: {
    informationSchedule: [],
    informationOrganizations: [],
    information: [],
  },
  actions: {
    getInformationSchedule({ commit }) {
      getInformationSchedule().then(response => commit('SET_INFORMATION_SCHEDULE', response))
    },
    getInformationOrganizations({ commit }) {
      getInformationOrganizations().then(response => commit('SET_INFORMATION_ORGANIZATIONS', response))
    },
    getInformation({ commit }) {
      getInformation().then(response => commit('SET_INFORMATION', response))
    }
  },
  mutations: {
    SET_INFORMATION_SCHEDULE(state, informationSchedule) {
      state.informationSchedule = informationSchedule
    },
    SET_INFORMATION_ORGANIZATIONS(state, informationOrganizations) {
      state.informationOrganizations = informationOrganizations
    },
    SET_INFORMATION(state, information) {
      state.information = information
    }
  }
}