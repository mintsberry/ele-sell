import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import './assets/stylus/index.stylus'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
