<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
export default {
  data () {
    return {
      name: 'Home'
    }
  },
  components: {
    HomeHeader, HomeSwiper, HomeIcons
  }
}
</script>
<style scoped>
</style>
