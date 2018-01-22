<template>
  <div class="succinct-con">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"
      @handleClick="getBanner"/>
    <div class="type-con">
      <ul class="type_list clearfix">
        <li v-for="(item,index) in typeList"
            :key="index">
          <router-link :to="{path:'/exhibit/type-detail',query:{id:item.id}}">
            <img :src="item.img"/>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'
  import {getBannerMixin} from '@/public/js/mixin'
  import {getAjax} from '@/public/js/config'

  export default {
    mixins: [getBannerMixin],
    components: {
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
            title: '展品精粹',
            id: 3
          }
        ],
        title: '常设展览',
        typeList: ''
      }
    },
    created() {
      this.getBanner()
      this.getTypeList()
    },
    methods: {
      /**
       * 获取藏品精粹banner
       * @param id  分类id
       */
      getBanner(id = 3) {
        this.getBannerData({id: id, url: 'api/oftenbanner'})
      },

      /**
       * 获取藏品精粹分类
       */
      getTypeList() {
        const url = 'api/collectionclass'
        getAjax(url, {},
          (res) => {
            console.log(res)
            this.typeList = res.data
          }, (err) => {
            console.log(err)
          }, this)
      }
    }
  }
</script>
<style scoped lang="less">
  .succinct-con {
    .type-con {
      width: 100%;
      padding-top: 50px;
      background: #f6f6f6;
      .type_list {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 60px;
        li {
          float: left;
          width: 385px;
          height: 290px;
          overflow: hidden;
          margin-right: 20px;
          margin-bottom: 20px;
          img {
            width: 100%;
          }
          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
