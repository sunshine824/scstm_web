<template>
  <div class="patch">
    <banner :mold="mold" :navs="navs" :title="title"/>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'

  export default {
    components:{
      Banner,
    },
    data() {
      return {
        title:'临展信息',
        navs:[
          {
            href: '/patch/patch_info',
            title: '临展信息',
            id: 1
          },
          {
            href: '/patch/flow_science',
            title: '流动科技馆',
            id: 2
          },
        ],
        mold:''
      }
    }
  }
</script>
<style lang="less">

</style>
