<template>
  <div>
    <home-header ></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconsList='iconsList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import { getMainAllData } from '@/api/main.js'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      iconsList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    mainApi () {
      getMainAllData(this.city)
        .then(res => {
          const data = res.data
          this.iconsList = data.iconList
          this.recommendList = data.recommendList
          this.swiperList = data.swiperList
          this.weekendList = data.weekendList
          console.log(data)
        })
    }
  },
  components: {
    HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend
  },
  mounted () {
    this.mainApi()
    this.lastCity = this.city
  },
  // 当城市切换时重新发送网络请求
  activated () {
    if (this.lastCity !== this.city) {
      this.mainApi()
      this.lastCity = this.city
    }
  }
}
</script>
<style scoped>
</style>
