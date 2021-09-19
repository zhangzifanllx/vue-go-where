// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css' // 统一不同手机初始化样式
import 'styles/border.css' // 一像素解决方案
import fastclick from 'fastclick'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
fastclick.attach(document.body) // 解决移动端点击300ms延迟问题
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(VueAwesomeSwiper)
// 路由就是根据网址的不同，返回不同的内容给用户
