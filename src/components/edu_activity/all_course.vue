<template>
  <div class="activity">
    <div class="act-con">
      <div class="type_list">
        <type-list :type_list="crowds" title="面向人群"></type-list>
        <type-list :type_list="activities" title="活动类型"></type-list>
        <type-list :type_list="act_status" title="活动状态"></type-list>
      </div>
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
  import TypeList from '@/base/edu/type_list'
  import PatchItem from '@/base/patch/patch_item'
  import Pagination from '@/base/pagination'

  export default {
    components: {
      TypeList,
      PatchItem,
      Pagination
    },
    data() {
      return {
        crowds: [
          {
            classname: '幼儿园',
            id: 1
          },
          {
            classname: '1-3年级小学生',
            id: 2
          },
          {
            classname: '初中生',
            id: 3
          },
          {
            classname: '高中生',
            id: 4
          },
          {
            classname: '亲子',
            id: 5
          },
          {
            classname: '成人',
            id: 6
          }
        ],
        activities: [
          {
            classname: '讲解导游',
            id: 1
          },
          {
            classname: '探索者联盟',
            id: 2
          },
          {
            classname: '小小博物馆',
            id: 3
          },
          {
            classname: '触碰大自然',
            id: 4
          }
        ],
        act_status: [
          {
            classname: '无需预约',
            id: 1
          },
          {
            classname: '需预约',
            id: 2
          }
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
  .activity {
    width: 100%;
    margin-top: 50px;
    .act-con {
      width: 1200px;
      margin: 0 auto;
      .type_list{
        margin-bottom: 20px;
      }
    }
  }
</style>
