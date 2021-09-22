<template>
  <div class="header">
    <span class="iconfont left-icon" @click="$router.go(-1)">&#xe685;</span>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varible.styl'
  .header
    height: .86rem
    position: relative
    line-height: .86rem
    background-color: $bgColor
    color: white
    font-size: .35rem
    text-align: center
    .left-icon
      position: absolute
      top: 0
      left: 0
      padding-left: .2rem
      font-size: .4rem
</style>
