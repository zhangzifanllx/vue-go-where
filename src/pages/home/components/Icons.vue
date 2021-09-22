<template>
  <div class='icons'>
    <!-- 使用滑动组件来滑动图标菜单 -->
    <swiper >
      <swiper-slide v-for="(item, index) in totalPages" :key="index" >
        <div class='icon-item' v-for="sub in item" :key="sub.id">
          <img
            :src='sub.imgUrl'
            alt=''
          />
          <span>{{sub.desc}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomwIcons',
  props: {
    iconsList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    totalPages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (pages[page]) {
          pages[page].push(item)
        } else {
          pages[page] = []
          pages[page].push(item)
        }
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varible.styl'
@import '~styles/mixins.styl'

.icons >>> .swiper-container {
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 50%
  background-color: $F6Color
  box-shadow: 0.04rem -0.04rem 0.04rem #f6f6f6
}

.icon-item {
  width: 25%
  float: left
  box-sizing: border-box
  padding: 0.2rem
  text-align: center

  img {
    width: 75%
    margin-bottom: .1rem
  }

  span {
    color: $textColor
    // 文字的优化处理
    display: block
    ellipsis()
  }
}
</style>
