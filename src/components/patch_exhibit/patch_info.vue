<template>
  <div class="patch-list">
    <div class="info-con">
      <nav-bar :navBar="navBar"
               @handleClick="handleTypeClick">
      </nav-bar>
      <div class="list">
        <patch-item v-if="patchData"
                    v-for="(item,index) in patchData.data"
                    :key="index"
                    :data="item">
        </patch-item>
      </div>
      <Pagination v-if="patchData"
                  :total="patchData.total*10"
                  @handleChange="handlePage">
      </Pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import NavBar from '@/base/navBar'
  import PatchItem from '@/base/patch/patch_item'
  import Pagination from '@/base/pagination'
  import {getAjax} from '@/public/js/config'

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
        patchData: '',
        page: 1,  //页码
        type: 1   //查询条件
      }
    },
    created() {
      this.getPatchList()
    },
    methods: {
      handlePage(page) {
        this.page = page
        this.getPatchList()
      },
      handleTypeClick(typeId) {
        this.type = typeId
        this.getPatchList()
      },
      /**
       * 获取临展信息列表
       */
      getPatchList() {
        const url = 'api/showlists'
        getAjax(url, {
            page: this.page,
            type: this.type
          },
          (res) => {
            console.log(res)
            this.patchData = res.data
          }, (err) => {
            console.log(err)
          }, this)
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
