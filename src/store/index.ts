import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    didLogin: false,
    cart: []
  },
  mutations: {
    sendItem (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    sendItem ({ commit }, payload) {
      commit('sendItem', payload)
    }
  },
  modules: {
  },
  getters: {
    getItem (state) {
      return state.cart
    }
  }
})
