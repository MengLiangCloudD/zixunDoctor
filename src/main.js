// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/style/base.css";
import store from "./store";
import axios from 'axios'; /* 引入axios进行地址访问*/
import { Button,Icon } from 'iview';
import 'view-design/dist/styles/iview.css';
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('Icon', Icon);
Vue.component('Button', Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
