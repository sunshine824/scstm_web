<template>
  <div class="activity">
    <div class="act-con">
      <div class="type_list">
        <type-list :type_list="crowds" title="面向人群" @toggle="handleCrowds"></type-list>
        <type-list :type_list="activities" title="活动类型" @toggle="handleAct"></type-list>
        <type-list :type_list="floor" title="楼层筛选" @toggle="handleFloor"></type-list>
        <type-list :type_list="act_status" title="活动状态" @toggle="handleStatus"></type-list>
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
        floor: [
          {classname: '1F', id: 1},
          {classname: '2F', id: 2},
          {classname: '3F', id: 3},
          {classname: '4F', id: 4},
        ],
        crowdId: '',  //面向人群id
        actId: '',    //活动类型id
        floorId: '',  //楼层筛选id
        statusId: '',  //活动状态id
        total: 100
      }
    },
    methods: {
      /**
       * 获取子组件页码
       * @param page
       */
      handlePage(page) {
        console.log(page)
      },

      /**
       * 获取子组件面向人群id
       * @param id
       */
      handleCrowds(id) {
        console.log('面向人群id: ' + id)
        this.crowdId = id
      },
      /**
       * 获取子组件活动id
       * @param id
       */
      handleAct(id) {
        console.log('活动类型id: ' + id)
        this.actId = id
      },
      /**
       * 获取子组件楼层id
       * @param id
       */
      handleFloor(id) {
        console.log('楼层筛选id: ' + id)
        this.floorId = id
      },
      /**
       * 获取子组件状态id
       * @param id
       */
      handleStatus(id) {
        console.log('活动状态id: ' + id)
        this.statusId = id
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
      .type_list {
        margin-bottom: 20px;
      }
    }
  }
</style>
