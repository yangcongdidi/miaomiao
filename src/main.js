import Vue from 'vue'
import App from './App.vue'
import router from '../routers'
import store from '../stores'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data:{
    eventHub:new Vue()
  }
}).$mount('#app')
