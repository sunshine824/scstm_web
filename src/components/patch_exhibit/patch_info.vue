<template>
  <div class="patch-list">
    <div class="info-con">
      <nav-bar :navBar="navBar"></nav-bar>
      <div class="list">
        <patch-item></patch-item>
        <patch-item></patch-item>
        <patch-item></patch-item>
      </div>
      <Page :total="100" @on-change="handleChange"></Page>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import NavBar from '@/base/navBar'
  import PatchItem from '@/base/patch/patch_item'
  import {Page} from 'iview'

  export default {
    components: {
      NavBar,
      PatchItem,
      Page
    },
    data() {
      return {
        navBar:[
          {title:'正在展览',id:1},
          {title:'即将展览',id:2},
          {title:'展览回归',id:3},
        ]
      }
    },
    methods:{
      handleChange(page){
        console.log(page)
      }
    }
  }
</script>
<style scoped lang="less">
  .patch-list {
    margin-top: 50px;
    .info-con {
      width: 1200px;
      margin: 0 auto;
      .ivu-page{
        margin-top: 40px;
        text-align: center;
        margin-bottom: 80px;
        .ivu-page-item-active{
          background-color: #28bbff;
          border-color: #28bbff;
        }
        .ivu-page-item:hover{
          border-color: #28bbff;
        }
        .ivu-page-next:hover, .ivu-page-prev:hover{
          border-color: #28bbff;
        }
      }
    }
  }
</style>
