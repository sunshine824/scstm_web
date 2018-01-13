<template>
  <div class="ind-nav">
    <div class="layout clearfix nav-con">
      <div class="fl logo">
        <router-link to="/">
          <img src="../../assets/scstm-logo.png"/>
        </router-link>
      </div>
      <ul class="fr">
        <li v-for="(item,index) in navs" :key="index">
          <router-link :to="item.href">
            <img :src="item.icon"/>
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        navs: [
          {
            icon: '../static/images/test/scstm_06.png',
            href: '/',
            title: '首页'
          },
          {
            icon: '../static/images/test/scstm_09.png',
            href: '/',
            title: '常设展览'
          },
          {
            icon: '../static/images/test/scstm_11.png',
            href: '/',
            title: '临展信息'
          },
          {
            icon: '../static/images/test/scstm_13.png',
            href: '/',
            title: '教育活动'
          },
          {
            icon: '../static/images/test/scstm_15.png',
            href: '/',
            title: '美科星未来学院'
          },
          {
            icon: '../static/images/test/scstm_11.png',
            href: '/',
            title: '参观服务'
          },
          {
            icon: '../static/images/test/scstm_06.png',
            href: '/index',
            title: '科学朋友圈'
          },
        ]
      }
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
          height:100px;
          float: left;
          &:last-child{
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
          }
          &:hover{
            background: url("../../../static/images/test/scstm_03.png") no-repeat;
            a{
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
