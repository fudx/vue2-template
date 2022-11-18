import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './util/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/tailwindcss.css'


Vue.use(ElementUI);

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
