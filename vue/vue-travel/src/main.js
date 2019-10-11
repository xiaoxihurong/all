// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import router from './router'
import fastClick from 'fastclick'


Vue.use(Router)

import 'styles/reset.css'
import 'styles/border.css'


Vue.config.productionTip = false
fastClick.attach(document.body)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
