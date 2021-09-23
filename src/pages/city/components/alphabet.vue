<template>
  <div class="alpha">
      <div
       class="item"
       v-for="item in allAlphas"
       :ref="item"
       :key="item"
       @click="change"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'AlphaBet',
  props: {
    cities: {
      type: Object
    }
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  computed: {
    allAlphas () {
      const alphas = []
      for (let item in this.cities) {
        alphas.push(item)
      }
      return alphas
    },
    aClientY () {
      const cy = this.$refs['A'][0].offsetTop
      return cy
    }
  },
  methods: {
    change (e) {
      this.$emit('change', e.target.innerHTML)
    },
    changeScroll (e) {
      this.$emit('change', e.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let pages = e.touches[0].clientY - 73.8
          const info = this.allAlphas[Math.floor((pages - this.aClientY) / 21.225)]
          if (info >= 'A' && info <= 'Z') {
            this.changeScroll(this.$refs[info][0])
          }
        }, 16)
      }
      // console.log(this.$refs[info][0])
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .alpha
        position: absolute
        right: 0
        top: 1.47rem
        bottom: 0
        display: flex
        flex-direction: column
        justify-content: center
        color: $bgColor
        padding: .1rem
        .item
          margin: .08rem
</style>
