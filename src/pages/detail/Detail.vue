<template>
  <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
export default {
  name: 'DetailPage',
  components: {
    DetailBanner, DetailHeader
  }
}
</script>

<style scoped>
</style>
