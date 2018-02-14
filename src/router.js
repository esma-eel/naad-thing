import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//general
const Dashboard = () => import('@/views/general/Dashboard.vue');
const studentInformation = () => import('@/views/general/studentInformation.vue');
const charSadoChar = () => import('@/views/general/404.vue');
//management
const addAndDeleteUnit = () => import('@/views/management/addAndDeleteUnit.vue');
const chooseUnit = () => import('@/views/management/chooseUnit.vue');
const mailBox = () => import('@/views/management/mailBox.vue');
const termLog = () => import('@/views/management/termLog.vue');
const Maali = () => import('@/views/management/Maali.vue');
const weeklySchedule = () => import('@/views/management/weeklySchedule.vue');
// request service
const chargeAccount = () => import('@/views/requestService/chargeAccount.vue');
const preChooseUnit = () => import('@/views/requestService/preChooseUnit.vue');
const rqEteraz = () => import('@/views/requestService/rqEteraz.vue');
const rqGovahi = () => import('@/views/requestService/rqGovahi.vue');
const rqOrderFood = () => import('@/views/requestService/rqOrderFood.vue');
//setting
const Setting = () => import('@/views/settings/Setting.vue');

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
