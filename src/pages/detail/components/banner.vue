<template>
  <div>
    <div class="banner" @click="handleBannerShow">
      <div class="banner-img">
          <img src="http://img1.qunarzz.com/sight/p0/201403/07/1d6628b7a44cfc762d3c0fc88a68663c.jpg_600x330_21ab3fd8.jpg" alt="">
      </div>
      <div class="banner-info">
          <div class="title">深业半汤御泉庄温泉</div>
          <div class="num">
              <i class="iconfont ban-icon">&#xeac4;</i>
              6
          </div>
      </div>
  </div>
  <detail-gallary :imgList='bannerList' v-show="showBanner" @hiddenBanner="sonHidden"></detail-gallary>
  </div>
</template>

<script>
import DetailGallary from 'common/gallary/gallary.vue'
export default {
  name: 'Detail',
  components: {
    DetailGallary
  },
  data () {
    return {
      showBanner: false
    //   bannerList: []
    }
  },
  methods: {
    handleBannerShow () {
      this.showBanner = true
    },
    sonHidden () {
      this.showBanner = false
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    .banner-img
      overflow: hidden
      height: 0
      padding-bottom: 55%
      img
        width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        .title
            flex: 1
            font-size: .38rem
            color: white
            padding: .2rem
        .num
            font-size: .38rem
            margin-right: .5rem
            margin-top: .14rem
            color: white
            .ban-icon
                font-size: .38rem
                color: white
</style>
