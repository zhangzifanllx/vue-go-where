import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
const City = () => import('@/pages/city/City.vue')
const Detail = () => import('@/pages/detail/Detail.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
