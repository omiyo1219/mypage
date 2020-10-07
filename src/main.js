// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import "vuetify/dist/vuetify.min.css"

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: 0,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify : new Vuetify({
    icons: {
      iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
  }),
  components: { App },
  template: '<App/>'
})
