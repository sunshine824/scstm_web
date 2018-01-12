<template>
  <div class="home">
    <Header/>
    <!--<ind-nav/>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAjax} from '@/public/js/config'
  import Header from '@/base/Head/header'
  //import IndNav from '@/base/Head/ind_nav'

  export default {
    components:{
      Header,
      //IndNav
    },
    data() {
      return {
        homeDate: ''
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
  .hello {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    .txt {
      color: red;
    }
  }
</style>
