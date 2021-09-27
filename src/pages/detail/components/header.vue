<template>
  <div>
    <div class="header" v-show="showHeader" :style='slowShowHeader'>
    <span class="iconfont left-icon" @click="$router.push('/')">&#xe685;</span>
    景点详情
  </div>
  <div class="back-icon" v-show="!showHeader">
      <span class="iconfont pre-icon" @click="$router.push('/')">&#xe685;</span>
  </div>
  <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: false,
      // 动态的绑定样式
      slowShowHeader: {
        opacity: 0
      }
    }
  },
  methods: {
    scrollContent () {
      const top = document.documentElement.scrollTop
      if (top > 40) {
        this.showHeader = true
        this.slowShowHeader.opacity = top / 160 > 1 ? 1 : top / 160
      } else {
        this.showHeader = false
      }
    }
  },
  activated () {
    // 监听屏幕的滚动
    window.addEventListener('scroll', this.scrollContent)
  },
  // 解绑全局事件，防止影响其他组件
  deactivated () {
    window.removeEventListener('scroll', this.scrollContent)
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varible.styl'
  .header
    height: .86rem
    position: fixed
    line-height: .86rem
    background-color: $bgColor
    color: white
    font-size: .35rem
    text-align: center
    top: 0
    left: 0
    right: 0
    .left-icon
      position: absolute
      top: 0
      left: 0
      padding-left: .2rem
      font-size: .4rem
  .back-icon
    width: .6rem
    line-height: .6rem
    background-color: #000
    text-align: center
    position: absolute
    top: .2rem
    left: .2rem
    border-radius: .4rem
    opacity: .8
    .pre-icon
      color: white
  .content
    height: 300rem
</style>
