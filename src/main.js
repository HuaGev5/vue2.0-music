// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
// ES6转义补丁
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
// 300毫秒点击
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'
import store from './store'

fastclick.attach(document.body)  // 除去300毫秒的点击延迟
Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
