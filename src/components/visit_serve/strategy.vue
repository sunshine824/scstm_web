<template>
  <div class="strategy">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"
      @handleClick="getBanner"/>
    <bg>
      <div class="strategy-con">
        <nav-bar :navBar="navBar"
                 @handleClick="handleTypeClick">
        </nav-bar>
        <visit-road v-if="typeId===1"></visit-road>
        <traffic v-if="typeId===2"></traffic>
      </div>
    </bg>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'
  import {getBannerMixin} from '@/public/js/mixin'
  import NavBar from '@/base/navBar'
  import {getAjax} from '@/public/js/config'
  import Bg from '@/base/bg'
  import Traffic from '@/base/visit_serve/traffic'
  import VisitRoad from '@/base/visit_serve/visit_road'

  export default {
    mixins: [getBannerMixin],
    components: {
      NavBar,
      Banner,
      Bg,
      Traffic,
      VisitRoad
    },
    data() {
      return {
        navBar: [
          {title: '参观路线', id: 1},
          {title: '交通信息', id: 2},
          {title: '购票', id: 3, href: 'https://www.baidu.com'},
        ],
        navs: [
          {
            href: '/visit_serve/strategy',
            title: '参观攻略',
            id: 1
          },
          {
            href: '/visit_serve/act_calendar',
            title: '活动日历',
            id: 2
          },
          {
            href: '/visit_serve/SE',
            title: 'SE餐厅',
            id: 3
          },
          {
            href: '/visit_serve/consult',
            title: '参观咨询',
            id: 4
          },
          {
            href: '/visit_serve/notice',
            title: '新闻公告',
            id: 5
          }
        ],
        title: '参观服务',
        typeId: 1
      }
    },
    created() {
      this.getBanner()
    },
    methods: {
      /**
       * 获取参观攻略banner
       * @param id  分类id
       */
      getBanner() {
        this.getBannerData({id: '', url: 'api/visitbanner'})
      },

      handleTypeClick(typeId) {
        this.typeId = typeId
      },
    }
  }
</script>
<style lang="less">
  .strategy-con {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
  }
</style>
