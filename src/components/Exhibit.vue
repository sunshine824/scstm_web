<template>
  <div class="exhibit">
    <banner
      :mold="mold"
      :navs="navs"
      :banner="banner"
      :title="title"
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
        title:'常设展览',
        navs: [
          {
            href: '/exhibit/survey',
            title: '展馆概况',
            id: ''
          },
          {
            href: '/exhibit/guide',
            title: '楼层导览',
            id: 1
          },
          {
            href: '/exhibit/round',
            title: '全景环游',
            id: ''
          },
          {
            href: '/exhibit/theater',
            title: '影院剧场',
            id: 2
          },
          {
            href: '/exhibit/succinct',
            title: '藏品精粹',
            id: 3
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
       * 获取常设展览banner
       * @param id  分类id
       */
      getBanner(id = 1) {
        const url = 'api/oftenbanner'
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
  .exhibit {
    position: relative;
  }
</style>
