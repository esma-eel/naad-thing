import Vue from 'vue'
import Vuex from 'vuex'

import readyToSelectUnits from './modules/readyToSelectUnits';
import studentDetails from './modules/studentDetails';
import setting from './modules/setting';
import mailBox from './modules/mailBox';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    readyToSelectUnits,
    studentDetails,
    setting,
    mailBox
  },
  // }
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
})
