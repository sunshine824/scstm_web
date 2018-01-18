<template>
  <div class="content" v-if="homeData.data">
    <swiper :banners="homeData.data.banner"></swiper>
    <div class="wrap">
      <div class="wrap-left">
        <div class="l-top">
          <img src="../assets/home_03.png"/>
          <p class="t-name">美科星学院</p>
        </div>
        <div class="l-bottom"></div>
      </div>
      <div class="wrap-right">
        <div class="r-top"></div>
        <div class="r-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAjax} from '@/public/js/config'
  import Swiper from '@/base/Home/swiper'

  export default {
    components: {
      Swiper
    },
    data() {
      return {
        homeData: [],
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
    .wrap {
      width: 1200px;
      margin: 40px auto 0 auto;
      padding-bottom: 100px;
      height: 794px;
      .wrap-left {
        float: left;
        width: 700px;
        .l-top {
          width: 100%;
          position: relative;
          margin-bottom: 26px;
          img {
            width: 100%;
          }
          .t-name{
            position: absolute;
            left: 30px;
            top:26px;
            font-size: 24px;
            color: #fff;
          }
        }
        .l-bottom{
          height: 366px;
          width: 100%;
          background: gray;
          margin-bottom: 26px;
        }
      }
      .wrap-right{
        float: right;
        width: 474px;
        .r-top{
          width: 100%;
          background: blue;
          height: 247px;
          margin-bottom: 26px;
        }
        .r-bottom{
          width: 100%;
          background: yellowgreen;
          height: 437px;
          margin-bottom: 26px;
        }
      }
    }
  }
</style>
