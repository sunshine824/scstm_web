<template>
  <div class="patch">
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
        title: '临展信息',
        navs: [
          {
            href: '/patch/patch_info',
            title: '临时展览',
            id: 1
          },
          {
            href: '/patch/flow_science',
            title: '流动科技馆',
            id: 2
          },
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
        const url = 'api/tembanner'
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
<style lang="less">

</style>
