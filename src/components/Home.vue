<template>
  <div class="content" v-if="homeData.data">
    <swiper :banners="homeData.data.banner"></swiper>
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
    img {
      width: 100%;
    }
  }
</style>
