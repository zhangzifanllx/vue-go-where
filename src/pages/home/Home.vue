<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
export default {
  data () {
    return {
      name: 'Home'
    }
  },
  components: {
    HomeHeader
  }
}
</script>
<style scoped>
</style>
