// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios';
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import VueLazyLoad from 'vue-lazyload'

import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueLazyLoad, {
  loading: require('../static/images/loading.png'),
})

//loading进度条加载
router.beforeEach((to, from, next) => {
  store.dispatch('set_loading_state', true)
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  setTimeout(() => {
    store.dispatch('set_loading_state', false)
  },3000)
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
