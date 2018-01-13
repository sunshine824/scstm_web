<template>
  <div class="home">

    <div class="head">
      <Header/>
      <ind-nav/>
    </div>

    <div class="content">
      <swiper/>
    </div>

    <div class="foot">
      <guide/>
      <Footer/>
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
        homeDate: '',
        //banner: '../static/images/test/banner.png'
      }
    },
    created() {
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
            this.homeDate = res
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
