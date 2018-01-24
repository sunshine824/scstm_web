<template>
  <div class="act-calendar">
    <banner
      :navs="navs"
      :banner="banner"
      :title="title"
      @handleClick="getBanner"/>
    <bg>
      <div class="calendar-con">
        <div class="calendar-date">
          <div class="calendar-box">
            <ul class="weeks clearfix">
              <li v-for="(item,index) in weeks"
                  :key="index">
                {{item}}
              </li>
            </ul>
            <ul class="date clearfix">
              <li v-for="(item,index) in calendarDate"
                  :key="index"
                  :style="index===0 ? {marginLeft : count*74 + 'px'} : 0"
                  :class="{active:index===current}"
                  @click="toggleClick(index,item)">
                {{item.slice(-2) | filterDate}}
              </li>
            </ul>
          </div>
          <p @click="nextMonth">下个月</p>
          <p @click="nowMonth">本月</p>
        </div>
      </div>
    </bg>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'
  import {getBannerMixin} from '@/public/js/mixin'
  import Bg from '@/base/bg'
  import moment from 'moment'

  export default {
    mixins: [getBannerMixin],
    components: {
      Banner,
      Bg
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
        calendarDate: [],
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        current: parseInt(moment().format('DD')) - 1,
        count: 0
      }
    },
    created() {
      this.getBanner()
      this.getCalendarDate(0)
    },
    filters: {
      //去0
      filterDate(str) {
        return str.replace(/\b(0+)/gi, "")
      }
    },
    methods: {
      /**
       * 获取活动日历banner
       * @param id  分类id
       */
      getBanner() {
        this.getBannerData({id: '', url: 'api/consulbanner'})
      },

      /**
       * 获取月份日期
       * @param count
       */
      getCalendarDate(count) {
        this.calendarDate = []
        const start = moment()
          .startOf('month')
          .add('months', count)
          .format('YYYY-MM-DD')
        const end = moment()
          .endOf('month')
          .add('months', count)
          .format('YYYY-MM-DD')

        this.count = moment(start).format("E")

        for (let i = 1; i < parseInt(end.slice(-2)); i++) {
          const date = moment(start).add(i, 'day').format('YYYY-MM-DD')
          this.calendarDate.push(date)
        }
        this.calendarDate.unshift(start)
      },

      toggleClick(index, date) {
        console.log(date)
        this.current = index
      },

      nextMonth() {
        this.current = 0
        this.getCalendarDate(1)
      },

      nowMonth() {
        this.current = parseInt(moment().format('DD')) - 1
        this.getCalendarDate(0)
      }
    }
  }
</script>
<style lang="less">
  .calendar-con {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    .calendar-date {
      width: 100%;
      padding: 26px 42px 26px 26px;
      background: #fff;
      box-shadow: 0 3px 36px 0 #EDEDED;
      .calendar-box {
        width: 540px;
        border-right: 1px solid #e2e2e2;
        .weeks {
          width: 100%;
          li {
            float: left;
            width: 64px;
            height: 58px;
            text-align: center;
            line-height: 58px;
            color: #a2abb4;
            font-size: 16px;
            margin-right: 10px;
          }
        }
        .date {
          width: 100%;
          li {
            width: 64px;
            height: 64px;
            float: left;
            text-align: center;
            line-height: 64px;
            font-size: 18px;
            color: #6c7797;
            margin-right: 10px;
            border-radius: 50%;
            transition: all .3s;
            background: #fff;
            cursor: pointer;
            &:hover {
              background: #d4d4d4;
              color: #fff;
            }
            &.active {
              background: #08ba5f;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
