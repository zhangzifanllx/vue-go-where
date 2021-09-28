<template>
  <div>
      <detail-banner :list="gallaryImgs"></detail-banner>
      <detail-list :list="detailList"></detail-list>
      <detail-header :name="sightName"></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
import { getDetailInfo } from 'api/detail.js'
export default {
  name: 'DetailPage',
  components: {
    DetailBanner, DetailHeader, DetailList
  },
  data () {
    return {
      detailList: [],
      bannerImg: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  mounted () {
    getDetailInfo(this.$route.params.id)
      .then(res => {
        // console.log(res)
        const data = res.data
        // console.log(data)
        this.detailList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      })
  }
}
</script>

<style lang="stylus" scoped>
</style>
