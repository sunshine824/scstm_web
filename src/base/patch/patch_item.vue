<template>
  <div class="m-item clearfix">
    <router-link to="/exhibit/theater/1">
      <img src="../../assets/patch_03.png"/>
    </router-link>
    <div class="m-txt">
      <h2 class="m-title"><router-link to="/exhibit/theater/1">特种保镖 <span class="mold">4D</span></router-link></h2>
      <p class="m-time">
        <Icon type="ios-calendar-outline" class="time"></Icon>
        2017年12月22日 - 2018年1月22日
      </p>
      <p class="address">
        <Icon type="ios-location-outline" class="location"></Icon>
        四川科技馆二楼展厅
      </p>
      <p class="intr">
        身为特战队员的张天择在一次缉毒任务“驱魔行动”中误伤了自己的战友，陷入深深自责的张天择选择离开特战队。
        机缘巧合成为了富豪千金小雅的贴身保镖，两人渐渐成为了忘年交。但好景不长，曾经的犯罪团伙余孽绑架了小雅，并要挟张天择二十四小时内必须将毒品红粉骷髅的配方磁盘找到并交出来。
        张天择能不能找到红粉骷髅磁盘？能不能成功解决小雅？一场特战风暴即将拉开序幕
      </p>
      <div class="keywords">
        <span>高中生</span>
        <span>探索者联盟</span>
        <span>需预约</span>
      </div>
      <!--<p class="btn-book">立即预定</p>-->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Icon} from 'iview'

  export default {
    components: {
      Icon,
    },
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .m-item {
    margin-bottom: 25px;
    background: #fff;
    img {
      width: 450px;
      height: 320px;
      float: left;
    }
    .m-txt {
      float: left;
      margin-top: 40px;
      margin-left: 40px;
      width: 700px;
      text-align: justify;
      .m-title {
        font-size: 30px;
        color: #333;
        margin-bottom: 15px;
        a{
          color: #333;
          &:hover{
            color: #28bbff;
          }
        }
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
          color: #fff;
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
        color: #5e6d84;
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
        color: #9a9a9a;
        line-height: 28px;
        margin-top: 10px;
        margin-bottom: 20px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
      .keywords{
        color: #a3a3a3;
        display: inline-block;
        span{
          display: inline-block;
          margin-right: 10px;
          padding: 10px 20px;
          background: #f0f0f0;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
        }
      }
    }
  }
</style>
