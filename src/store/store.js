import Vue from 'vue'
import Vuex from 'vuex'

import readyToSelectUnits from './modules/readyToSelectUnits';
import studentDetails from './modules/studentDetails';
import setting from './modules/setting';
import mailBox from './modules/mailBox';
import pishVahed from './modules/pishEntekhabVahed';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    readyToSelectUnits,
    studentDetails,
    setting,
    mailBox,
    pishVahed,
  },
  // }
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
})
