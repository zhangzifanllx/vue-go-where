<template>
  <div>
  <div class="search">
    <input v-model="keyword" type="text" placeholder="请输入城市或者拼音">
  </div>
  <div class="search-content" ref="search" v-show="hasKeyWord">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCitySelect(item.name)">{{item.name}}</li>
        <!-- 如果没有搜索到任何城市就显示该选项 -->
        <li class="search-item border-bottom" v-show="hasList">未搜索到任何有关城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCitySelect (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      // 节流
      if (this.timer) {
        clearTimeout(this.timer)
        // console.log(this.timer)
      }
      // keyword为空，清空显示列表的数据
      if (!this.keyword) {
        this.list = []
      }
      // console.log(123)
      // 遍历拿到符合条件的城市
      this.timer = setTimeout(() => {
        let result = []
        for (let item in this.cities) {
          this.cities[item].forEach(i => {
            if (i.name.indexOf(this.keyword) !== -1 || i.spell.indexOf(this.keyword) !== -1) {
              result.push(i)
            }
          }, 100)
        }
        // console.log(result)
        this.list = result
      })
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  },
  computed: {
    hasKeyWord () {
      return this.keyword.length
    },
    hasList () {
      return this.list.length === 0
    }
  }
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
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.47rem
    bottom: 0
    left: 0
    right: 0
    background-color: white
    .search-item
      line-height: .6rem
      padding-left: .2rem
      color: #666
</style>
