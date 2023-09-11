import {getContacts} from "@/api";

export default {
  namespaced: true,
  state: {
    contacts: {}
  },
  actions: {
    getContacts({ commit }) {
      getContacts().then(response => commit('SET_CONTACTS', response))
    }
  },
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts
    }
  }
}