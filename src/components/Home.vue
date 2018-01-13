<template>
  <div class="home">

    <div class="head">
      <Header/>
      <ind-nav :logo="homeData.data.logo"/>
    </div>

    <div class="content">
      <swiper :banners="homeData.data.banner"></swiper>
    </div>

    <div class="foot">
      <guide/>
      <Footer :phones="homeData.data.end_phone" :ewm="homeData.data.wx" :related_url="homeData.data.related_url"/>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {getAjax} from '@/public/js/config'
  import Header from '@/base/Head/header'
  import IndNav from '@/base/Head/ind_nav'
  import Guide from '@/base/Foot/guide'
  import Footer from '@/base/Foot/footer'
  import Swiper from '@/base/Home/swiper'

  export default {
    components: {
      Header,
      IndNav,
      Guide,
      Footer,
      Swiper
    },
    data() {
      return {
        homeData: [],
        //banner: '../static/images/test/banner.png'
      }
    },
    mounted() {
      this.getHomeDate()
    },
    methods: {
      /**
       * 获取首页数据
       */
      getHomeDate() {
        const url = 'api/index'
        getAjax(url, {},
          (res) => {
            //console.log(res)
            this.homeData = res
          }, (err) => {
            console.log(err)
          }, this)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
