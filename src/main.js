import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import $ from 'jquery'
import '../static/bootstrap/css/bootstrap.css'
import '../static/bootstrap/js/bootstrap.js'
Vue.config.productionTip = false

new Vue({
  router,
  $,
  render: h => h(App),
}).$mount('#app')
