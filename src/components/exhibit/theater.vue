<template>
  <div class="movie-list">
    <div class="list-con">
      <nav-bar :navBar="navBar"
               @handleClick="handleTypeClick">
      </nav-bar>
      <div class="lists">
        <movie-item v-if="theaterData.status===0"
                    v-for="(item,index) in theaterData.data.data"
                    :key="index"
                    :data="item">
        </movie-item>
        <p v-if="theaterData.status===2">暂无数据</p>
      </div>
      <Pagination
        v-if="theaterData.status===0"
        :total="theaterData.data.total*10"
        :page="page"
        @handleChange="handlePage">
      </Pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import MovieItem from '@/base/exhibit/movie_item'
  import Pagination from '@/base/pagination'
  import NavBar from '@/base/navBar'
  import {getAjax} from '@/public/js/config'

  export default {
    components: {
      MovieItem,
      Pagination,
      NavBar
    },
    data() {
      return {
        navBar: [
          {title: '正在上映', id: 1},
          {title: '即将上映', id: 2},
          {title: '往期回归', id: 3},
        ],
        theaterData: '',
        page: 1,  //页码
        type: 1   //查询条件
      }
    },
    created() {
      this.getTheaterData()
    },
    methods: {
      handlePage(page) {
        this.page = page
        this.getTheaterData()
      },
      handleTypeClick(typeId) {
        this.type = typeId
        this.page = 1
        this.getTheaterData()
      },
      /**
       * 获取影院剧场列表
       */
      getTheaterData() {
        const url = 'api/cinemalists'
        getAjax(url, {
            page: this.page,
            type: this.type
          },
          (res) => {
            this.theaterData = res
          }, (err) => {
            console.log(err)
          }, this)
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
