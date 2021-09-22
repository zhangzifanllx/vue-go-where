<template>
  <div class="swiper">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key='item.id'>
        <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        //  添加页码点样式
        pagination: '.swiper-pagination',
        // 是否循环轮播
        loop: true
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
    .swiper >>> .swiper-pagination-bullet .swiper-pagination-bullet-active
        color: #fff
    .swiper
        width: 100%
        height: 0
        overflow: hidden
        // 当图片还没加载时 防止出现文字抖动现象
        padding-bottom: 31.8%
        .swiper-img
            width: 100%
            background-color: #eee

</style>
