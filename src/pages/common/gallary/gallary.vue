<template>
  <div class="gallary" @click="hiddenBanner">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in imgList" :key="index">
        <div class="gal-img">
            <img class="gallary-img" :src="item" alt="">
        </div>
        </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgList: {
      type: Array,
      default () {
        return ['https://img1.qunarzz.com/sight/p0/1410/4d/c5eac3630e9ba35a2909a86a3530e5e1.water.jpg_r_800x800_acf5a0dd.jpg',
          'https://img1.qunarzz.com/sight/p0/201403/07/8c9a75c5ef11015c56b8072795016b97.jpg_r_800x800_adca95b7.jpg']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    hiddenBanner () {
      this.$emit('hiddenBanner')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .gallary
        position: absolute
        display: flex
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: #000
        align-items: center
        .gal-img
            .gallary-img
                width: 100%
        .swiper-pagination-fraction
            color: white
</style>
