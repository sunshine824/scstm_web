<template>
  <div class="hello">
    <p class="txt">hello world!</p>
  </div>
</template>

<script>
  import {getAjax} from '@/public/js/config'

  export default {
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
