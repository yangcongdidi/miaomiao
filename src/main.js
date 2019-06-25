import Vue from 'vue'
import App from './App.vue'
import router from '../routers'
import store from '../stores'
import axios from 'axios'
import myScroll from '@/components/myScroll'
import loading from '@/components/loading'

Vue.config.productionTip = false
Vue.prototype.axios=axios

Vue.component('myScroll',myScroll)
Vue.component('loading',loading)

new Vue({
  router,
  store,
  render: h => h(App),
  data:{
    eventHub:new Vue()
  }
}).$mount('#app')
