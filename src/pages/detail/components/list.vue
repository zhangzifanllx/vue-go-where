<template>
  <div class="list">
      <div class="item border-bottom" v-for="(item, index) in list" :key="index">
          <i class="iconfont">&#xe605;</i>
          <span class="title">{{item.title}}</span>
          <div v-if="item.children">
              <detail-list :list="item.children"></detail-list>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
    .list
        .item
            line-height: .4rem
            padding: .2rem .2rem 0 .3rem
            .title
                font-size: .3rem
                font-weight: 600
</style>
