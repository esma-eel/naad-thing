import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/general/Dashboard.vue';
import studentInformation from './views/general/studentInformation.vue';
import Setting from './views/settings/Setting.vue';
import charSadoChar from './views/general/404.vue';

//
import addAndDeleteUnit from './views/management/addAndDeleteUnit.vue';
import chooseUnit from './views/management/chooseUnit.vue';
import mailBox from './views/management/mailBox.vue';
import termLog from './views/management/termLog.vue';
import Maali from './views/management/Maali.vue';
import weeklySchedule from './views/management/weeklySchedule.vue';
//
import chargeAccount from './views/requestService/chargeAccount.vue';
import preChooseUnit from './views/requestService/preChooseUnit.vue';
import rqEteraz from './views/requestService/rqEteraz.vue';
import rqGovahi from './views/requestService/rqGovahi.vue';
import rqOrderFood from './views/requestService/rqOrderFood.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/studentInformation',
      name: 'studentInformation',
      component: studentInformation
    },
    {
      path: '/addAndDeleteUnit',
      name: 'addAndDeleteUnit',
      component: addAndDeleteUnit
    },
    {
      path: '/chooseUnit',
      name: 'chooseUnit',
      component: chooseUnit
    },
    {
      path: '/mailBox',
      name: 'mailBox',
      component: mailBox
    },
    {
      path: '/termLog',
      name: 'termLog',
      component: termLog
    },
    {
      path: '/weeklySchedule',
      name: 'weeklySchedule',
      component: weeklySchedule
    },
    {
      path: '/chargeAccount',
      name: 'chargeAccount',
      component: chargeAccount
    },
    {
      path: '/preChooseUnit',
      name: 'preChooseUnit',
      component: preChooseUnit
    },
    {
      path: '/rqEteraz',
      name: 'rqEteraz',
      component: rqEteraz
    },
    {
      path: '/rqGovahi',
      name: 'rqGovahi',
      component: rqGovahi
    },
    {
      path: '/rqOrderFood',
      name: 'rqOrderFood',
      component: rqOrderFood
    },
    {
      path: '/Maali',
      name: 'Maali',
      component: Maali
    },
    {
      path: '/404',
      name: '404',
      component: charSadoChar
    },
    {
      path: '*',
      redirect: '/404'
    }

  ]
})
