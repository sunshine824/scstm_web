<template>
  <div class="ind-nav">
    <div class="layout clearfix nav-con">
      <div class="fl logo">
        <router-link to="/">
          <img :src="logo" v-if="logo"/>
        </router-link>
      </div>
      <ul class="fr">
        <li v-for="(item,index) in navs"
            :key="index"
            :class="pathname===item.title ? 'active' : ''">
          <router-link :to="item.href">
            <!--<img :src="item.icon"/>-->
            <span class="icon-img"
                  :class="item.className"
                  :style="{background: 'url('+item.icon+') no-repeat center'}">
            </span>
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      logo: {
        type: String,
        default: ''
      },
      pathname:{
        type:String,
        default:''
      }
    },
    data() {
      return {
        navs: [
          {
            icon: '../static/images/test/scstm_06.png',
            href: '/',
            title: '首页',
            className: 'home'
          },
          {
            icon: '../static/images/test/scstm_09.png',
            href: '/exhibit/survey',
            title: '常设展览',
            className: 'exhibit'
          },
          {
            icon: '../static/images/test/scstm_11.png',
            href: '/patch/patch_info',
            title: '临展信息',
            className: 'patch'
          },
          {
            icon: '../static/images/test/scstm_13.png',
            href: '/edu_activity/all_course',
            title: '教育活动',
            className: 'edu'
          },
          {
            icon: '../static/images/test/scstm_15.png',
            href: '/mkx_school/school_course',
            title: '美科星未来学院',
            className: 'mkx'
          },
          {
            icon: '../static/images/test/scstm_11.png',
            href: '/visit_serve',
            title: '参观服务',
            className: 'visit'
          },
          {
            icon: '../static/images/test/scstm_06.png',
            href: '/friends',
            title: '科学朋友圈',
            className: 'friends'
          },
        ],
        title: '首页'
      }
    },
    methods: {
      /*toggle(index) {
        this.current = this.$route.name
      }*/
    }
  }
</script>
<style scoped lang="less">
  .ind-nav {
    width: 100%;
    background: #fff;
    .nav-con {
      .logo {
        line-height: 100px;
        img {
          width: 220px;
        }
      }
      ul {
        li {
          display: table;
          width: 110px;
          text-align: center;
          margin-right: 10px;
          height: 100px;
          float: left;
          &:last-child {
            margin-right: 0;
          }
          a {
            color: #596781;
            display: table-cell;
            vertical-align: middle;
            font-size: 14px;
            img {
              margin-bottom: 8px;
            }
            .icon-img {
              width: 32px;
              background-size: 32px 100%;
              display: inline-block;
              height: 32px;
            }
          }
          &:hover {
            background: url("../../../static/images/test/scstm_03.png") no-repeat;
            a {
              color: #fff;
              .home {
                background: url("../../../static/images/test/guide.png") !important;
              }
            }
          }
          &.active {
            background: url("../../../static/images/test/scstm_03.png") no-repeat;
            a {
              color: #fff;
              .home {
                background: url("../../../static/images/test/guide.png") !important;
              }
            }
          }
        }
      }
    }
  }
</style>
