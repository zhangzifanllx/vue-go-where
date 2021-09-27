<template>
  <div>
      <detail-banner></detail-banner>
      <detail-list :list="detailList"></detail-list>
      <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
export default {
  name: 'DetailPage',
  components: {
    DetailBanner, DetailHeader, DetailList
  },
  data () {
    return {
      detailList: [{
        title: '成人票',
        children: [{
          title: '成人三联票',
          children: [{
            title: '成人五人组团票'
          }]
        }, {
          title: '成人儿童联票'
        }]
      }, {
        title: '特惠票'
      }, {
        title: '儿童票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
