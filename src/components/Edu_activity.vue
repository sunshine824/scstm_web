<template>
  <div class="edu">
    <banner
      :mold="mold"
      :navs="navs"
      :title="title"
      :banner="banner"
      @handleClick="getBanner"/>

    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'
  import {getAjax} from '@/public/js/config'

  export default {
    components: {
      Banner,
    },
    data() {
      return {
        title:'教育活动',
        navs: [
          {
            href: '/edu_activity/all_course',
            title: '全部课程',
            id: 1
          }
        ],
        mold: '',
        banner: ''
      }
    },
    created() {
      this.getBanner()
    },
    methods: {
      /**
       * 获取临展信息banner
       * @param id  分类id
       */
      getBanner(id = 1) {
        const url = 'api/educationbanner'
        getAjax(url, {type: id},
          (res) => {
            this.banner = res.data.banner
          }, (err) => {
            console.log(err)
          }, this)
      }
    }
  }
</script>
<style lang="less" scoped>
  .edu {
    position: relative;
  }
</style>
