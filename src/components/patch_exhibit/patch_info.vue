<template>
  <div class="patch-list">
    <div class="info-con">
      <nav-bar :navBar="navBar"></nav-bar>
      <div class="list">
        <patch-item></patch-item>
        <patch-item></patch-item>
        <patch-item></patch-item>
      </div>
      <Pagination :total="total" @handleChange="handlePage"></Pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import NavBar from '@/base/navBar'
  import PatchItem from '@/base/patch/patch_item'
  import Pagination from '@/base/pagination'

  export default {
    components: {
      NavBar,
      PatchItem,
      Pagination
    },
    data() {
      return {
        navBar: [
          {title: '正在展览', id: 1},
          {title: '即将展览', id: 2},
          {title: '展览回归', id: 3},
        ],
        total: 100
      }
    },
    methods: {
      handlePage(page) {
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
    }
  }
</style>
