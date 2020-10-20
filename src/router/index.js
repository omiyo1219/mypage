import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Success from '@/pages/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})
