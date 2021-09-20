<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
  data () {
    return {
      name: 'Home'
    }
  },
  components: {
    HomeHeader, HomeSwiper
  }
}
</script>
<style scoped>
</style>
