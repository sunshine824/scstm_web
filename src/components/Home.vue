<template>
  <div class="content" v-if="homeData.data">
    <swiper :banners="homeData.data.banner"></swiper>
    <div class="wrap">
      <div class="wrap-left">
        <div class="l-top">
          <img src="../assets/home_03.png"/>
          <p class="t-name">美科星学院</p>
        </div>
        <div class="l-bottom">
          <div class="img">
            <router-link to="/">
              <img src="http://img.dpm.org.cn/Uploads/Picture/2018/01/08/s5a52d85fd14a6.jpg"/>
            </router-link>
          </div>
          <div class="news">
            <div class="title clearfix">
              <h2>教育活动</h2>
              <router-link to='/'>
                <span>
                  <Icon type="ios-arrow-right"></Icon>
                </span>
              </router-link>
            </div>
            <div class="news-list">
              <ul>
                <li>
                  <p class="date">
                    <span class="day">30</span>
                    <span class="month">2017.10</span>
                  </p>
                  <router-link to="/" class="info">
                    <span class="info-title">神器的电路</span>
                    <span class="intr">电路的集成需要导线和怨气组件</span>
                  </router-link>
                </li>
                <li>
                  <p class="date">
                    <span class="day">30</span>
                    <span class="month">2017.10</span>
                  </p>
                  <router-link to="/" class="info">
                    <span class="info-title">神器的电路</span>
                    <span class="intr">电路的集成需要导线和怨气组件</span>
                  </router-link>
                </li>
                <li>
                  <p class="date">
                    <span class="day">30</span>
                    <span class="month">2017.10</span>
                  </p>
                  <router-link to="/" class="info">
                    <span class="info-title">神器的电路</span>
                    <span class="intr">电路的集成需要导线和怨气组件</span>
                  </router-link>
                </li>
                <li>
                  <p class="date">
                    <span class="day">30</span>
                    <span class="month">2017.10</span>
                  </p>
                  <router-link to="/" class="info">
                    <span class="info-title">神器的电路</span>
                    <span class="intr">电路的集成需要导线和怨气组件</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-right">
        <div class="r-top">
          <ul class="clearfix">
            <li class="l1">
              <router-link to="/">
                <div class="bg">
                  <img src="http://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a34f91d4b.png"/>
                </div>
                <div class="ico">
                  <img src="http://img.dpm.org.cn/Uploads/Picture/2017/01/10/s587455ac6f6fd.png"/>
                </div>
                <div class="cont">
                  <h3>在线预约</h3>
                  <p>贴心的票务服务，让您省时省力更省心</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="r-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAjax} from '@/public/js/config'
  import Swiper from '@/base/Home/swiper'
  import {Icon} from 'iview'

  export default {
    components: {
      Swiper,
      Icon
    },
    data() {
      return {
        homeData: [],
        //banner: '../static/images/test/banner.png'
      }
    },
    created() {
      this.getHomeDate()
    },
    methods: {
      /**
       * 获取首页数据
       */
      getHomeDate() {
        const url = 'api/index'
        getAjax(url, {},
          (res) => {
            //console.log(res)
            this.homeData = res
          }, (err) => {
            console.log(err)
          }, this)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content {
    width: 100%;
    .wrap {
      width: 1200px;
      margin: 40px auto 0 auto;
      padding-bottom: 100px;
      height: 794px;
      .wrap-left {
        float: left;
        width: 700px;
        .l-top {
          width: 100%;
          position: relative;
          margin-bottom: 26px;
          img {
            width: 100%;
          }
          .t-name {
            position: absolute;
            left: 30px;
            top: 26px;
            font-size: 24px;
            color: #fff;
          }
        }
        .l-bottom {
          height: 410px;
          width: 100%;
          margin-bottom: 26px;
          overflow: hidden;
          background: #51cbfc;
          .img {
            float: right;
            overflow: hidden;
            width: 393px;
            height: 410px;
            img {
              transform: scale3d(1, 1, 1);
              transition: opacity 0.35s ease 0s, transform 0.35s ease 0s;
            }
            &:hover {
              img {
                transform: scale3d(1.15, 1.15, 1);
              }
            }
          }
          .news {
            padding: 30px 15px 20px 15px;
            overflow: hidden;
            color: #fff;
            .title {
              color: #fff;
              a {
                float: right;
                color: #fff;
                width: 26px;
                height: 26px;
                border-radius: 4px;
                border: 1px solid #fff;
                font-size: 18px;
                line-height: 26px;
                text-align: center;
                margin-top: 6px;
              }
              h2 {
                float: left;
                font-size: 24px;
              }
            }
            .news-list {
              padding-top: 10px;
              ul {
                li {
                  padding: 10px 0 15px 0;
                  border-bottom:1px dashed rgba(255,255,255,.8);
                  color: #fff;
                  .date {
                    display: inline-block;
                    vertical-align: middle;
                    width: 60px;
                    text-align: center;
                    margin-right: 8px;
                    .day {
                      font-size: 32px;
                      display: block;
                    }
                    .month{
                      font-size: 12px;
                      display: block;
                    }
                  }
                  .info{
                    display: inline-block;
                    vertical-align: bottom;
                    color: #fff;
                    width: 200px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    .info-title{
                      font-size: 22px;
                      display: block;
                      margin-bottom: 5px;
                    }
                    .intr{
                      font-size: 15px;
                      color: rgba(255,255,255,.9);
                    }
                  }
                  &:last-child{
                    border-bottom: none;
                  }
                }
              }
            }
          }
        }
      }
      .wrap-right {
        float: right;
        width: 474px;
        .r-top {
          width: 100%;
          height: 247px;
          margin-bottom: 26px;
          ul{
            li{
              float: left;
              width: 173px;
              height: 247px;
              position: relative;
              overflow: hidden;
              .bg{
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -126px;
                width: 240px;
                height: 252px;
                img{
                  animation: swinging 30s linear 0s infinite;
                }
              }
              .ico{
                width: 90px;
                padding-top: 26px;
                margin: auto;
                position: relative;
                img{
                  text-align: center;
                  width: 100%;
                }
              }
              .cont{
                padding: 0 20px;
                color: #fff;
                position: relative;
                z-index: 2;
                text-align: center;
                h3{
                  font-size: 22px;
                  line-height: 1.2;
                  color: #fff;
                  margin-top: 20px;
                  margin-bottom: 18px;
                }
                p{
                  line-height: 22px;
                  color: #fff;
                  font-size: 14px;
                }
              }
            }
            .l1{
              background: url("http://img.dpm.org.cn/Public/static/themes/image/home_block1_box3_bg1.jpg");
            }
          }
        }
        .r-bottom {
          width: 100%;
          background: yellowgreen;
          height: 481px;
          margin-bottom: 26px;
        }
      }
    }
  }
  @-moz-keyframes swinging {
    0% { transform: rotate(0); }


    100% { transform: rotate(360deg); }
  }
  @-o-keyframes swinging {
    0% { transform: rotate(0); }


    100% { transform: rotate(360deg); }
  }
  @-webkit-keyframes swinging{
    0% { transform: rotate(0); }


    100% { transform: rotate(360deg); }
  }
  @keyframes swinging{
    0% { transform: rotate(0); }


    100% { transform: rotate(360deg); }
  }
</style>
