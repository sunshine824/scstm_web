<template>
  <div class="strategy">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"
      @handleClick="getBanner"/>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'
  import {getBannerMixin} from '@/public/js/mixin'
  import NavBar from '@/base/navBar'
  import {getAjax} from '@/public/js/config'
  import Bg from '@/base/bg'

  export default {
    mixins: [getBannerMixin],
    components: {
      NavBar,
      Banner,
      Bg
    },
    data() {
      return {
        navBar: [
          {title: '参观路线', id: 1},
          {title: '交通信息', id: 2},
          {title: '购票', id: 3},
        ],
        navs: [
          {
            href: '/exhibit/survey',
            title: '参观攻略',
            id: 1
          },
          {
            href: '/exhibit/guide',
            title: '活动日历',
            id: 2
          },
          {
            href: '/exhibit/round',
            title: 'SE餐厅',
            id: 3
          },
          {
            href: '/exhibit/theater',
            title: '参观咨询',
            id: 4
          },
          {
            href: '/exhibit/succinct',
            title: '新闻公告',
            id: 5
          }
        ],
        title: '参观服务',
      }
    },
    created(){
      this.getBanner()
    },
    methods:{
      /**
       * 获取参观攻略banner
       * @param id  分类id
       */
      getBanner() {
        this.getBannerData({id: '', url: 'api/visitbanner'})
      }
    }
  }
</script>
<style lang="less">

</style>
