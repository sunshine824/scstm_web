<template>
  <div class="exhibit">
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
        title:'常设展览',
        navs: [
          {
            href: '/exhibit/survey',
            title: '展馆概况',
            id: 1
          },
          {
            href: '/exhibit/guide',
            title: '楼层导览',
            id: 2
          },
          {
            href: '/exhibit/round',
            title: '全景环游',
            id: 3
          },
          {
            href: '/exhibit/theater',
            title: '影院剧场',
            id: 4
          },
          {
            href: '/exhibit/succinct',
            title: '藏品精粹',
            id: 5
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
  .exhibit {
    position: relative;
  }
</style>
