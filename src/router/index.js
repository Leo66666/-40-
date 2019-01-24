/**
 * vue路由器对象
 *  */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Test from '../pages/Test/Test.vue'
import Enter from '../pages/Enter/Enter.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/test',
      component:Test
    },
    {
      path: '/enter',
      component:Enter
    }
  ]
})
