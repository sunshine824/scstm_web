<template>
  <div class="activity">
    <div class="act-con">
      <div class="type_list">
        <type-list :type_list="crowds" title="面向人群" :isCheckBox="true" @toggle="handleCrowds"></type-list>
        <type-list :type_list="activities" title="活动类型" :isCheckBox="true" @toggle="handleAct"></type-list>
        <type-list :type_list="floor" title="楼层筛选" :isCheckBox="true" @toggle="handleFloor"></type-list>
        <type-list :type_list="act_status" title="活动状态" :isCheckBox="false" @toggle="handleStatus"></type-list>
      </div>
      <div class="list">
        <patch-item v-for="(item,index) in courseList.data"
                    :key="index"
                    :data="item">
        </patch-item>
      </div>
      <Pagination v-if="courseList.total"
                  :total="courseList.total*10"
                  :page="page"
                  @handleChange="handlePage">
      </Pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import TypeList from '@/base/edu/type_list'
  import PatchItem from '@/base/patch/patch_item'
  import Pagination from '@/base/pagination'
  import {getAjax} from '@/public/js/config'

  export default {
    components: {
      TypeList,
      PatchItem,
      Pagination
    },
    data() {
      return {
        crowds: [],
        activities: [],
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
        crowdId: [],  //面向人群id
        actId: [],    //活动类型id
        floorId: [],  //楼层筛选id
        statusId: '',  //活动状态id
        total: 100,
        page: 1,
        courseList: ''
      }
    },
    created() {
      this.getCrowdList()
      this.getActList()
      this.getCourseList()
    },
    methods: {
      /**
       * 获取面向人群列表
       */
      getCrowdList() {
        const url = 'api/listscourseclasp'
        getAjax(url, {},
          res => {
            this.crowds = res.data
          }, err => {
            console.log(err)
          }, this)
      },
      /**
       * 获取活动类型列表
       */
      getActList() {
        const url = 'api/listscourseclash'
        getAjax(url, {},
          res => {
            this.activities = res.data
          }, err => {
            console.log(err)
          }, this)
      },
      /**
       * 获取全部课程列表
       */
      getCourseList() {
        const url = 'api/educationlists'
        getAjax(url, {
            page: this.page,
            clas_p: this.crowdId,
            clas_h: this.actId,
            floor: this.floorId
          },
          res => {
            console.log(res)
            this.courseList = res.data
          }, err => {
            console.log(err)
          }, this)
      },

      /**
       * 获取子组件页码
       * @param page
       */
      handlePage(page) {
        this.page = page
        this.getCourseList()
      },

      /**
       * 获取子组件面向人群id
       * @param id
       */
      handleCrowds(id) {
        console.log('面向人群id: ' + id)
        this.crowdId = id
        this.page = 1
        this.getCourseList()
      },
      /**
       * 获取子组件活动id
       * @param id
       */
      handleAct(id) {
        console.log('活动类型id: ' + id)
        this.actId = id
        this.page = 1
        this.getCourseList()
      },
      /**
       * 获取子组件楼层id
       * @param id
       */
      handleFloor(id) {
        console.log('楼层筛选id: ' + id)
        this.floorId = id
        this.page = 1
        this.getCourseList()
      },
      /**
       * 获取子组件状态id
       * @param id
       */
      handleStatus(id) {
        console.log('活动状态id: ' + id)
        this.statusId = id
        this.page = 1
        if (id[0] === 2) { //需预约清空数据（暂无预约功能）
          this.courseList = []
        } else {
          this.getCourseList()
        }
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
