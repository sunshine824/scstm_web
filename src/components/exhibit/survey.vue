<template>
  <div class="survey-con">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"/>
    <div class="item">
      <p class="title">全新科技馆<span></span></p>
      <div class="text-info">
        <p class="txt">
          四川科技馆位于成都市中心天府广场北侧，处于成都市中央商务区中的文化博览区地标位置。占地面积60000平方米，建筑面积41800平方米。<br/>
          四川科技馆由原四川省展览馆改建而成，于2006年11月2日正式建成开馆，是一座多学科、多角度、全方位大型综合科普场馆，馆内常设展场面积2.5万平方米。经过近10年运行，于2016年6月18日正式闭馆改造。
        </p>
      </div>
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
        banner:'http://www.kjgadmin.com:8080/Public/uploads/banner/5a60485261a51.jpg'
      }
    }
  }
</script>
<style lang="less">
  .survey-con{
    .item{
      margin-top: 50px;
      .title{
        font-size: 20px;
        color: #666;
        text-align: center;
        margin-bottom: 25px;
        span{
          width:80px;
          height: 4px;
          display: block;
          margin: 10px auto;
          background-image: -webkit-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -moz-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -o-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -ms-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: linear-gradient(135deg, #00d0fb, #00acf6);
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
        }
      }
      .text-info{
        text-align: center;
        .txt{
          font-size: 14px;
          line-height: 25px;
        }
      }
    }
  }
</style>
