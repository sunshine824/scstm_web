<template>
  <div class="movie-list">
    <div class="list-con">
      <nav-bar :navBar="navBar"></nav-bar>
      <div class="lists">
        <movie-item></movie-item>
        <movie-item></movie-item>
        <movie-item></movie-item>
      </div>
      <Pagination :total="total" @handleChange="handlePage"></Pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import MovieItem from '@/base/exhibit/movie_item'
  import Pagination from '@/base/pagination'
  import NavBar from '@/base/navBar'

  export default {
    components:{
      MovieItem,
      Pagination,
      NavBar
    },
    data() {
      return {
        navBar:[
          {title:'正在上映',id:1},
          {title:'即将上映',id:2},
          {title:'往期回归',id:3},
        ],
        total: 100
      }
    },
    methods:{
      handlePage(page) {
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
    }
  }
</style>
