<template>
  <div class="survey-con">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"/>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'
  import {getBannerMixin} from '@/public/js/mixin'

  export default {
    mixins: [getBannerMixin],
    components:{
      Banner
    },
    data() {
      return {
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
        title: '常设展览',
        banner:'http://www.kjgadmin.com:8080/Public/uploads/banner/5a60485261a51.jpg'
      }
    }
  }
</script>
<style lang="less">

</style>
