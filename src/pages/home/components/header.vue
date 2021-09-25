<template>
  <div class="header">
      <div class="header-left">
          <span class="iconfont left-icon">&#xe685;</span>
      </div>
      <div class="header-center">
          <span class="iconfont">&#xe67d;</span>
          输入城市/景点/游玩主题</div>
      <div class="header-right" @click="$router.push('/city')">北京
          <span class="iconfont right-icon">&#xe688;</span>
          </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
    @import '~styles/varible.styl'
    .header
        height: .86rem
        line-height: .86rem;
        background-color: $bgColor
        display: flex
        color: #fff
        .header-left
            width: .86rem
            float: left
            text-align: center
            .left-icon
                font-size: .5rem
        .header-center
            flex: 1
            background-color: #fff
            border-radius: .1rem
            margin-top: .12rem
            line-height: .62rem
            height: .62rem
            margin-left: .1rem
            color: #ccc

        .header-right
            float: right
            width: 1.24rem
            text-align: center
            .right-icon
                margin-left: -.05rem
</style>
