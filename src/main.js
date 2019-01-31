import Vue from 'vue'
import './styles/cssInit.css'
import './styles/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import axiosConfig from './config/axiosConfig'
import App from './App.vue'

Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.axios.defaults = Object.assign(Vue.axios.defaults,axiosConfig);
//Vue.config.productionTip = false
var vue = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
