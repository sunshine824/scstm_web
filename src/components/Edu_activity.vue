<template>
  <div class="edu">
    <banner :mold="mold" :navs="navs" :title="title"/>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'

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
        mold: ''
      }
    },
    watch: {
      "$route"(to, from) {
        console.log(to)
      }
    }
  }
</script>
<style lang="less" scoped>
  .edu {
    position: relative;
  }
</style>
