<template>
  <div class="content" v-if="homeData.data">
    <swiper :banners="homeData.data.banner"></swiper>
    <bg>
      <div class="wrap clearfix">
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
                  <li v-for="(item,index) in homeData.data.education" :key="index">
                    <!--<p class="date">
                      <span class="day">30</span>
                      <span class="month">2017.10</span>
                    </p>-->
                    <router-link to="/" class="info">
                      <span class="info-title">{{item.title}}</span>
                      <span class="intr">{{item.introduce}}</span>
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
              <li v-for="(item,index) in gudies" :key="index" :style="{background:'url('+item.bg+')'}">
                <router-link :to="item.href">
                  <div class="bg">
                    <img :src="item.rotateBg"/>
                  </div>
                  <div class="ico">
                    <img :src="item.icon"/>
                  </div>
                  <div class="cont">
                    <h3>{{item.title}}</h3>
                    <p>{{item.intr}}</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="r-bottom">
            <p class="t-title">开闭馆时间</p>
            <div class="time-group">
              <p class="time-item">
                <span class="time">{{homeData.data.time.time_sta}}</span>
                <span class="txt">开始售票</span>
              </p>
              <p class="and">~</p>
              <p class="time-item">
                <span class="time">{{homeData.data.time.time_end}}</span>
                <span class="txt">闭馆时间</span>
              </p>
            </div>
            <div class="notice">
              <div class="title clearfix">
                <h2>公告</h2>
                <router-link to='/'>
                <span>
                  <Icon type="ios-arrow-right"></Icon>
                </span>
                </router-link>
              </div>
              <ul class="clearfix">
                <li v-for="(item,index) in homeData.data.inform" :key="index">
                  <router-link to="/">
                    {{item.title}}
                  </router-link>
                  <span>{{item.addtime}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </bg>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAjax} from '@/public/js/config'
  import Swiper from '@/base/Home/swiper'
  import {Icon} from 'iview'
  import Bg from '@/base/bg'

  export default {
    components: {
      Swiper,
      Icon,
      Bg
    },
    data() {
      return {
        homeData: [],
        gudies: [
          {
            bg: 'http://img.dpm.org.cn/Public/static/themes/image/home_block1_box3_bg1.jpg',
            rotateBg: 'http://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a34f91d4b.png',
            icon: 'http://img.dpm.org.cn/Uploads/Picture/2017/01/10/s587455ac6f6fd.png',
            href: '/',
            title: '在线预约',
            intr: '贴心的票务服务，让您省时省力更省心'
          },
          {
            bg: 'http://img.dpm.org.cn/Public/static/themes/image/home_block1_box3_bg2.jpg',
            rotateBg: 'http://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a37a3ba85.png',
            icon: 'http://img.dpm.org.cn/Uploads/Picture/2017/01/10/s587455ac6f6fd.png',
            href: '/',
            title: '参观服务',
            intr: '从科技馆开始，感受宇宙魅力'
          },
          {
            bg: 'http://img.dpm.org.cn/Public/static/themes/image/home_block1_box3_bg3.jpg',
            rotateBg: 'http://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a3934e72b.png',
            icon: 'http://img.dpm.org.cn/Uploads/Picture/2017/01/10/s587455ac6f6fd.png',
            href: '/',
            title: '在线预约',
            intr: '随时随地，为您提供身临其境的游览体验'
          },
        ]
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
      width: 1300px;
      margin: 0 auto;
      padding-top: 50px;
      padding-bottom: 50px;
      .title {
        color: #fff;
        padding-top: 30px;
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
      .wrap-left {
        float: left;
        width: 755px;
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
            padding: 0 20px 20px 20px;
            overflow: hidden;
            color: #fff;
            .news-list {
              padding-top: 10px;
              ul {
                li {
                  padding: 10px 0 15px 0;
                  border-bottom: 1px dashed rgba(255, 255, 255, .8);
                  color: #fff;
                  .date {
                    display: inline-block;
                    vertical-align: middle;
                    width: 60px;
                    text-align: left;
                    margin-right: 8px;
                    .day {
                      font-size: 32px;
                      display: block;
                    }
                    .month {
                      font-size: 12px;
                      display: block;
                    }
                  }
                  .info {
                    display: inline-block;
                    vertical-align: bottom;
                    color: #fff;
                    width: 250px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    .info-title {
                      font-size: 22px;
                      display: block;
                      margin-bottom: 5px;
                    }
                    .intr {
                      font-size: 15px;
                      color: rgba(255, 255, 255, .9);
                    }
                  }
                  &:last-child {
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
        width: 520px;
        .r-top {
          width: 100%;
          height: 247px;
          margin-bottom: 26px;
          ul {
            li {
              float: left;
              width: 173px;
              height: 247px;
              position: relative;
              overflow: hidden;
              .bg {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -126px;
                width: 240px;
                height: 252px;
                img {
                  animation: swinging 30s linear 0s infinite;
                }
              }
              .ico {
                width: 90px;
                padding-top: 26px;
                margin: auto;
                position: relative;
                img {
                  text-align: center;
                  width: 100%;
                }
              }
              .cont {
                padding: 0 20px;
                color: #fff;
                position: relative;
                z-index: 2;
                text-align: center;
                h3 {
                  font-size: 22px;
                  line-height: 1.2;
                  color: #fff;
                  margin-top: 20px;
                  margin-bottom: 18px;
                }
                p {
                  line-height: 22px;
                  color: #fff;
                  font-size: 14px;
                }
              }
            }
          }
        }
        .r-bottom {
          width: 100%;
          height: 506px;
          margin-bottom: 26px;
          padding: 30px 40px 20px 40px;
          background: #51cbfc;
          .t-title {
            font-size: 24px;
            color: #fff;
          }
          .time-group {
            margin-top: 25px;
            .time-item {
              background: rgba(255, 255, 255, .3);
              border: 1px solid #fff;
              padding: 9px 50px;
              -webkit-border-radius: 4px;
              -moz-border-radius: 4px;
              border-radius: 4px;
              color: #fff;
              display: inline-block;
              vertical-align: middle;
              text-align: center;
              .time {
                font-size: 30px;
                font-weight: bold;
                display: block;
              }
              .txt {
                font-size: 14px;
              }
            }
            .and {
              display: inline-block;
              vertical-align: middle;
              color: #fff;
              font-size: 40px;
              margin: 0 10px;
            }
          }
          .notice {
            ul {
              margin-top: 5px;
              li {
                padding: 15px 0;
                border-bottom: 1px dashed rgba(255, 255, 255, .8);
                color: #fff;
                span {
                  float: right;
                  font-size: 14px;
                }
                a {
                  color: #fff;
                  font-size: 14px;
                  width: 330px;
                  display: inline-block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                &:last-child {
                  border-bottom: none;
                }
              }
            }
          }
        }
      }
    }
  }

  @-moz-keyframes swinging {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes swinging {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes swinging {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes swinging {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
