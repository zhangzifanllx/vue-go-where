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
        return []
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
