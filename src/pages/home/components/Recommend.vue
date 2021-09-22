<template>
  <div class="recommend">
      <div class="title">热销推荐</div>
      <div class="item border-bottom" v-for="item in recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-desc">
              <div class="item-title">{{item.title}}</div>
              <div class="item-info">{{item.desc}}</div>
              <button class="detail">查看详情</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
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
    .item
        overflow: hidden
        display: flex
        height: 1.85rem
        padding: .08rem
        box-sizing: border-box
        .item-img
            width: 1.7rem
            height: 1.7rem
            margin-right: .2rem
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
                margin-bottom: .2rem
                min-width: 0
                ellipsis()
            .detail
                background-color: orange
                color: white
                padding: 0 .2rem
</style>
