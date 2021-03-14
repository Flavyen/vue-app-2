import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from '@/store/index.js'

Vue.use(VueRouter)

/*const ifConnected = (to, from, next) => {
  if (Vue.localStorage.get('isConnected')) {
    store.dispatch('connect', {
      token: Vue.localStorage.get('token')
    })
  }
  next()
}*/

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
