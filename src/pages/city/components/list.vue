<template>
  <div class="list" ref='wrapper'>
    <div class="content">
      <div class="current-city">
      <div class="title">当前城市</div>
      <div class="item-wrapper">
        <div class="item">{{hotCities[0].name}}</div>
      </div>
    </div>
    <div class="hot-city">
      <div class="title">热门城市</div>
      <div class="item-wrapper" v-for="(item, index) in hotCities" :key="index">
        <div class="item">{{item.name}}</div>
      </div>
    </div>
    <div class="order-city" v-for="(item, key) in cities" :key="key">
      <div class="title">{{key}}</div>
      <div class="citys border-bottom" v-for="sub in item" :key="sub.id">{{sub.name}}</div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    },
    hotCities: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    let scroll = new BScroll(this.$refs.wrapper)
    console.log(scroll)
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varible.styl'
  .border-bottom
    &:before
      border-color: #aaa
    &:after
      border-color: #ccc
  .title
    line-height: .56rem
    background-color: #ddd
    padding-left: .2rem
  .list
    position: absolute
    overflow: hidden
    left: 0
    right: 0
    top: 1.47rem
    bottom: 0
    .current-city
      overflow: hidden
      .item-wrapper
        float: left
        width: 27%
        padding: .1rem .3rem .1rem .1rem
        .item
          line-height: .46rem
          border: .01rem solid #666
          text-align: center
    .hot-city
      overflow: hidden
      .item-wrapper
        float: left
        width: 27%
        padding: .1rem .3rem .1rem .1rem
        .item
          line-height: .46rem
          border: .01rem solid #666
          text-align: center
    .order-city
      .citys
        padding: .2rem
</style>
