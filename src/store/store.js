import Vue from 'vue'
import Vuex from 'vuex'

import readyToSelectUnits from './modules/readyToSelectUnits';
import studentDetails from './modules/studentDetails';
import setting from './modules/setting';
import mailBox from './modules/mailBox';
import pishVahed from './modules/pishEntekhabVahed';
import accountCharge from './modules/accountCharge';
import orderFood from './modules/orderFood';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    readyToSelectUnits,
    studentDetails,
    setting,
    mailBox,
    pishVahed,
    accountCharge,
    orderFood,
  },
  // }
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
})
