<template>
  <div class="movie-list">
    <div class="list-con">
      <ul class="m-type clearfix">
        <li class="active">正在上映</li>
        <li>即将上映</li>
        <li>往期回顾</li>
      </ul>
      <div class="lists">
        <movie-item></movie-item>
        <movie-item></movie-item>
        <movie-item></movie-item>
      </div>
      <Page :total="100" @on-change="handleChange"></Page>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import MovieItem from '@/base/exhibit/movie_item'
  import {Page} from 'iview'

  export default {
    components:{
      MovieItem,
      Page
    },
    data() {
      return {}
    },
    methods:{
      handleChange(page){
        console.log(page)
      }
    }
  }
</script>
<style lang="less">
  .movie-list {
    margin-top: 50px;
    .list-con {
      width: 1200px;
      margin: 0 auto;
      .m-type {
        margin-bottom: 20px;
        li {
          display: inline-block;
          color: #333;
          font-size: 18px;
          margin-right: 30px;
          cursor: pointer;
          &.active{
            color: #1bb6ef;
          }
        }
      }
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
