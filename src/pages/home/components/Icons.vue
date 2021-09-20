<template>
  <div class='icons'>
    <!-- 使用滑动组件来滑动图标菜单 -->
    <swiper >
      <swiper-slide v-for="item in totalPages" :key="item" >
        <div class='icon-item' v-for="sub in item" :key="sub.id">
          <img
            :src='sub.imgUrl'
            alt=''
          />
          <span>{{sub.name}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomwIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg',
          name: '民宿客栈'
        },
        {
          id: '0002',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg.dpg',
          name: '专车自驾'
        },
        {
          id: '0003',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg.dpg',
          name: '旅游团购'
        },
        {
          id: '0004',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg.dpg',
          name: '一日游'
        },
        {
          id: '0005',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg',
          name: '自由行'
        },
        {
          id: '0006',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/199143/10/8979/4223/614599f5E45cd5464/d15aa650a0ebe596.png!q70.jpg.dpg',
          name: '特惠酒店'
        },
        {
          id: '0007',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg.dpg',
          name: '行程设计'
        },
        {
          id: '0008',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196711/35/12751/6996/60ec1000E21b5bab4/38077313cb9eac4b.png!q70.jpg.dpg',
          name: '周边短途'
        },
        {
          id: '0009',
          imgUrl:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg.dpg',
          name: '低价机票'
        }
      ]
    }
  },
  computed: {
    totalPages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
    width: 80%
  }

  span {
    color: $textColor
    // 文字的优化处理
    display: block
    ellipsis()
  }
}
</style>
