<template>
  <div class="swiper">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in list" :key='item.id'>
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
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        //  添加页码点样式
        pagination: '.swiper-pagination',
        // 是否循环轮播
        loop: true
      },
      list: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/94/23202a6a5864d8.jpg_r_640x214_92f21625.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/fd/0285e145e82233.jpg_r_640x214_b5f10121.jpg'
      }]
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
        padding-bottom: 37.7%
        .swiper-img
            width: 100%
            background-color: #eee

</style>
