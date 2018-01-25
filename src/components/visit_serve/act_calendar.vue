<template>
  <div class="act-calendar">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"
      @handleClick="getBanner"/>
    <bg>
      <div class="calendar-con">
        <div class="calendar-date clearfix">
          <calendar ref="calendar" @toggle="toggleClick"></calendar>
          <div class="act-info">
            <h2 class="title">{{currentDate}}活动</h2>
            <p class="intr">可以查询近7天场馆活动内容，以便大家合理安排参观时间</p>
            <div class="btns">
              <div v-for="(item,index) in actMonth"
                   :class="{active:current===index}"
                   :key="index" class="btn" @click="toggleMonth(index)">
                {{item}}
              </div>
            </div>
          </div>
        </div>
        <div class="calendar-list">
          <nav-bar :navBar="navBar"
                   @handleClick="handleTypeClick">
          </nav-bar>
        </div>
      </div>
    </bg>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'
  import {getBannerMixin} from '@/public/js/mixin'
  import Bg from '@/base/bg'
  import NavBar from '@/base/navBar'
  import moment from 'moment'
  import Calendar from '@/base/visit_serve/calendar'

  export default {
    mixins: [getBannerMixin],
    components: {
      Banner,
      Bg,
      Calendar,
      NavBar
    },
    data() {
      return {
        navs: [
          {
            href: '/visit_serve/strategy',
            title: '参观攻略',
            id: 1
          },
          {
            href: '/visit_serve/act_calendar',
            title: '活动日历',
            id: 2
          },
          {
            href: '/visit_serve/SE',
            title: 'SE餐厅',
            id: 3
          },
          {
            href: '/visit_serve/consult',
            title: '参观咨询',
            id: 4
          },
          {
            href: '/visit_serve/notice',
            title: '新闻公告',
            id: 5
          }
        ],
        title: '参观服务',
        actMonth: ['本月活动', '下月活动'],
        current: 0,
        navBar: [
          {title: '教育活动', id: 1},
          {title: '美科星未来学院', id: 2},
          {title: '影院剧场', id: 3},
          {title: '临时展览', id: 4},
        ],
        currentDate: moment().format('YYYY年M月')
      }
    },
    created() {
      this.getBanner()
    },
    methods: {
      /**
       * 获取活动日历banner
       * @param id  分类id
       */
      getBanner() {
        this.getBannerData({id: '', url: 'api/consulbanner'})
      },
      nextMonth() {
        this.$refs.calendar.nextMonth()
      },
      nowMonth() {
        this.$refs.calendar.nowMonth()
      },
      toggleMonth(index) {
        this.current = index
        this.currentDate = index === 0 ? moment().format('YYYY年M月') : moment().add('months', 1).format('YYYY年M月')
        index === 0 ? this.nowMonth() : this.nextMonth()
      },
      toggleClick(date) {
        console.log(parseInt(moment(date).format('X')) + 12 * 60 * 60)
      },
      handleTypeClick(type) {
        console.log(type)
      }
    }
  }
</script>
<style lang="less">
  .calendar-con {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
    .calendar-date {
      width: 100%;
      padding: 26px 42px 26px 26px;
      background: #fff;
      box-shadow: 0 3px 36px 0 #EDEDED;
      .act-info {
        display: inline-block;
        vertical-align: middle;
        padding-left: 50px;
        .title {
          font-size: 28px;
          color: #121c2a;
          padding: 5px 0 10px 0;
        }
        .intr {
          font-size: 14px;
          color: #616775;
        }
        .btns {
          width: 380px;
          height: 60px;
          border: 1px solid #26baf1;
          margin-top: 25px;
          border-radius: 4px;
          overflow: hidden;
          .btn {
            width: 50%;
            height: 60px;
            text-align: center;
            line-height: 60px;
            font-size: 16px;
            cursor: pointer;
            color: #1b2534;
            float: left;
          }
          .active {
            background: #0eb2ef;
            color: #fff;
          }
        }
      }
    }
    .calendar-list {
      margin-top: 50px;
    }
  }
</style>
