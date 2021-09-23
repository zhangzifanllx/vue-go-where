<template>
  <div class="search">
    <input type="text" placeholder="请输入城市或者拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varible.styl'
  .search
    background-color: $bgColor
    padding: .1rem
    input
        width: 100%
        text-align: center
        box-sizing: border-box
        color: #666
        padding: 0 .2rem
</style>
