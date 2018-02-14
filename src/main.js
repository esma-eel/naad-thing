import Vue from 'vue'
import Buefy from 'buefy'
import router from './router'
import 'buefy/lib/buefy.css'
import App from './App.vue'

Vue.use(Buefy);

export const Bus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
