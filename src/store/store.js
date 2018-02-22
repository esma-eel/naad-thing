import Vue from 'vue'
import Vuex from 'vuex'

import readyToSelectUnits from './modules/readyToSelectUnits';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    readyToSelectUnits,
  },
  // }
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
})
