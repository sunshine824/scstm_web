<template>
  <div class="succinct-con">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"
      @handleClick="getBanner"/>
    <div class="type-con">
      <ul class="type_list clearfix">
        <li>
          <img src="../../assets/guide_07.jpg"/>
        </li>
      </ul>
    </div>
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
      }
    },
    created() {
      this.getBanner()
    },
    methods:{
      /**
       * 获取藏品精粹banner
       * @param id  分类id
       */
      getBanner(id = 3) {
        this.getBannerData({id: id, url: 'api/oftenbanner'})
      },
    }
  }
</script>
<style scoped lang="less">
  .succinct-con{
    .type-con{
      width: 100%;
      padding-top:50px;
      background: #f6f6f6;
      .type_list{
        width: 1200px;
        margin: 0 auto;
        li{
          margin-right: 30px;
          margin-bottom: 30px;
          float: left;
        }
      }
    }
  }
</style>
