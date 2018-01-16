<template>
  <div class="movie-detail">
    <div class="m-info clearfix">
      <img src="../../assets/test.jpg"/>
      <div class="m-txt">
        <h2 class="m-title">特种保镖 <span class="mold">4D</span></h2>
        <p class="address">
          <Icon type="ios-location-outline" class="location"></Icon>
          四川科技馆二楼展厅
        </p>
        <p class="m-time">
          <Icon type="ios-timer-outline" class="time"></Icon>
          120分钟
        </p>
        <p class="intr">
          身为特战队员的张天择在一次缉毒任务“驱魔行动”中误伤了自己的战友，陷入深深自责的张天择选择离开特战队。
          机缘巧合成为了富豪千金小雅的贴身保镖，两人渐渐成为了忘年交。但好景不长，曾经的犯罪团伙余孽绑架了小雅，并要挟张天择二十四小时内必须将毒品红粉骷髅的配方磁盘找到并交出来。
          张天择能不能找到红粉骷髅磁盘？能不能成功解决小雅？一场特战风暴即将拉开序幕
        </p>
        <!--<p class="btn-book">立即预定</p>-->
      </div>
    </div>
    <div class="movie-clips clearfix">
      <p class="title">片花 / 剧照</p>
      <clips-roll></clips-roll>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Icon} from 'iview'
  import ClipsRoll from '@/base/clips_roll.vue'

  export default {
    components: {
      Icon,
      ClipsRoll
    },
    data() {
      return {}
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
      img {
        width: 340px;
        height: 460px;
        float: left;
        border: 8px solid #fff;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
      .m-txt {
        float: left;
        margin-top: 60px;
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
    .movie-clips{
      margin-top: 30px;
      margin-bottom: 50px;
      .title{
        font-size: 25px;
        color: #333;
        margin-bottom: 20px;
      }
    }
  }
</style>
