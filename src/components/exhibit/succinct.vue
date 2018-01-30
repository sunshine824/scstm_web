<template>
  <div class="succinct-con">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"
      @handleClick="getBanner"/>
    <div class="type-con">
      <ul class="type_list clearfix">
        <li v-for="(item,index) in typeList" :key="index">
          <div class="works-img">
            <img v-lazy="item.img"/>
          </div>
          <router-link :to="{path:'/exhibit/type-detail',query:{id:item.id}}" class="link-btn">
            飞行类
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
      background: #f6f6f6 url("../../assets/bg.png") no-repeat;
      background-size: 100%;
      .type_list {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 60px;
        li {
          float: left;
          width: 290px;
          height: 210px;
          overflow: hidden;
          margin-right: 13px;
          margin-bottom: 13px;
          position: relative;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          .works-img{
            width: 100%;
            height: 210px;
            text-align: center;
            img{
              width: 100%;
              min-height: 210px;
              -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
              transition: opacity 0.35s, transform 0.35s;
              -webkit-transform: scale(1.12);
              transform: scale(1.12);
            }
          }
          .link-btn{
            position: absolute;
            width: 150px;
            height: 40px;
            -webkit-border-radius: 6px;
            -moz-border-radius: 6px;
            border-radius: 6px;
            text-align: center;
            line-height: 40px;
            left: 50%;
            top:50%;
            margin-left: -75px;
            margin-top: -20px;
            border:1px solid #fff;
            background: rgba(255,255,255,.3);
            color: #fff;
            font-size: 16px;
            &:hover{
              background: rgba(0,0,0,.3);
            }
          }
          &:hover{
            img{
              background: rgba(0,0,0,.8);
              -webkit-transform: scale(1);
              transform: scale(1);
            }
          }
          &:nth-of-type(4n){
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
