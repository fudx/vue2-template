import Vue from 'vue'
import VueRouter from 'vue-router'
import userManage from '../views/userManage/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userManage',
    component: userManage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
