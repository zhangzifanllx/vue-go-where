<template>
  <div class="recommend">
      <div class="title">周末去哪儿</div>
      <div class="item border-bottom" v-for="item in weekendList" :key="item.id">
      <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
      </div>
          <div class="item-desc">
              <div class="item-title">{{item.title}}</div>
              <div class="item-info">{{item.desc}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height: .6rem
        background-color: #ddd
        text-indent: .25rem
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 33.9%
      .item-img
        width: 100%
    .item-desc
        flex: 1
        padding: .1rem
        .item-title
            font-size: .35rem
            min-width: 0
            margin-bottom: .2rem
            // 多余文字使用省略号显示
            ellipsis()
        .item-info
            color: #aaa
            min-width: 0
            ellipsis()
</style>
