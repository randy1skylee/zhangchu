// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'


// Vue.use(MintUI);

Vue.config.productionTip = false


Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueAwesomeSwiper,
  template: '<App/>',
  components: { App }
})
