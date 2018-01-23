<template>
  <div class="th_detail-con">
    <banner
      v-if="courseDetail.status===0"
      :navs="navs"
      :banner="courseDetail.data.img"
      :title="title"/>
    <bg>
      <div class="movie-detail" v-if="courseDetail.status===0">
        <div class="m-info clearfix">
          <div class="de-img">
            <img :src="courseDetail.data.img"/>
          </div>
          <div class="m-txt">
            <h2 class="m-title">{{courseDetail.data.title}}</h2>
            <p class="address">
              <Icon type="ios-location-outline" class="location"></Icon>
              {{courseDetail.data.address}}
            </p>
            <p class="m-time">
              <Icon type="ios-timer-outline" class="time"></Icon>
              {{courseDetail.data.time}}
            </p>
            <p class="intr">
              {{courseDetail.data.introduce}}
            </p>
            <!--<p class="btn-book">立即预定</p>-->
          </div>
        </div>
        <!--<div class="movie-clips clearfix">
          <p class="title">片花 / 剧照</p>
          <clips-roll :data="patchDetail.data.show_img"></clips-roll>
        </div>-->
      </div>
    </bg>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Icon} from 'iview'
  import Banner from '@/base/banner'
  import {getBannerMixin} from '@/public/js/mixin'
  import ClipsRoll from '@/base/clips_roll.vue'
  import {getAjax} from '@/public/js/config'
  import Bg from '@/base/bg'

  export default {
    mixins: [getBannerMixin],
    components: {
      Icon,
      ClipsRoll,
      Banner,
      Bg
    },
    data() {
      return {
        courseDetail: '',
        navs: [
          {
            href: '/edu_activity/all_course',
            title: '全部课程',
            id: 1
          }
        ],
        title: '教育活动',
      }
    },
    created() {
      this.getDetailData()
    },
    methods: {
      getDetailData() {
        const url = 'api/educationdeta'
        getAjax(url, {
          id: this.$route.query.id
        }, (res) => {
          console.log(res)
          this.courseDetail = res
        }, (err) => {
          console.log(err)
        }, this)
      }
    }
  }
</script>
<style scoped lang="less">
  .movie-detail {
    position: relative;
    z-index: 1000;
    width: 1200px;
    margin: -400px auto 0 auto;
    .m-info {
      .de-img{
        width: 340px;
        height: 460px;
        float: left;
        overflow: hidden;
        img {
          width: 100%;
          border: 8px solid #fff;
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          border-radius: 2px;
        }
      }
      .m-txt {
        float: left;
        margin-top: 40px;
        margin-left: 40px;
        width: 810px;
        text-align: justify;
        .m-title {
          font-size: 30px;
          color: #fff;
          margin-bottom: 15px;
          .mold {
            font-size: 14px;
            background-image: -webkit-linear-gradient(135deg, #00d0fb, #00acf6);
            background-image: -moz-linear-gradient(135deg, #00d0fb, #00acf6);
            background-image: -o-linear-gradient(135deg, #00d0fb, #00acf6);
            background-image: -ms-linear-gradient(135deg, #00d0fb, #00acf6);
            background-image: linear-gradient(135deg, #00d0fb, #00acf6);
            width: 46px;
            height: 25px;
            margin-left: 10px;
            display: inline-block;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            vertical-align: middle;
            text-align: center;
            line-height: 25px;
          }
        }
        .address {
          color: #28bbff;
          font-size: 16px;
          margin-bottom: 10px;
          .location {
            width: 18px;
            font-size: 20px;
            font-weight: bold;
            margin-right: 5px;
          }
        }
        .m-time {
          color: #fff;
          font-size: 16px;
          margin-bottom: 10px;
          .time {
            width: 18px;
            font-size: 20px;
            font-weight: bold;
            margin-right: 5px;
          }
        }
        .intr {
          font-size: 16px;
          color: #fff;
          line-height: 28px;
          margin-top: 10px;
          margin-bottom: 30px;
        }
        .btn-book {
          width: 130px;
          height: 45px;
          background-image: -webkit-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -moz-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -o-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -ms-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: linear-gradient(135deg, #00d0fb, #00acf6);
          text-align: center;
          line-height: 45px;
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          border-radius: 2px;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .movie-clips {
      padding-top: 80px;
      padding-bottom: 50px;
      .title {
        font-size: 25px;
        color: #333;
        margin-bottom: 20px;
      }
    }
  }
</style>
