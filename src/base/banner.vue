<template>
  <div class="banner">
    <div class="navs">
      <div class="navs-con">
        <p class="title">常设展览</p>
        <ul class="guides">
          <li v-for="(item,index) in navs"
              :key="index"
              @click="toggle(index)">
            <router-link :to="item.href"
                         :class="{active:index === num}">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="banner-img" :style="{background: 'url('+banner+') no-repeat center'}"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      banner: {
        type: String,
        default: '../static/images/test/movie_banner.jpg'
      }
    },
    data() {
      return {
        navs: [
          {
            href: '/exhibit/survey',
            title: '展馆概况',
            id: 1
          },
          {
            href: '/exhibit/guide',
            title: '楼层导览',
            id: 2
          },
          {
            href: '/exhibit/round',
            title: '全景环游',
            id: 3
          },
          {
            href: '/exhibit/theater',
            title: '影院剧场',
            id: 4
          },
          {
            href: '/exhibit/succinct',
            title: '藏品精粹',
            id: 5
          }
        ],
        num: 0
      }
    },
    methods: {
      toggle(index) {
        this.num = index
      }
    }
  }
</script>
<style scoped lang="less">
  .banner {
    width: 100%;
    height: 560px;
    position: relative;
    background: #000;
    .banner-img {
      -webkit-filter: blur(10px);
      background-size: cover !important;
      width: 100%;
      height: 560px;
    }
    .navs {
      width: 100%;
      height: 80px;
      background: rgba(42, 138, 199, .7);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 20;
      .navs-con {
        width: 1200px;
        margin: 0 auto;
        .title {
          font-size: 30px;
          color: #fff;
          margin-right: 20px;
          display: inline-block;
          line-height: 80px;
          vertical-align: middle;
        }
        .guides {
          display: inline-block;
          vertical-align: middle;
          li {
            display: inline-block;
            font-size: 16px;
            margin-right: 4px;
            a {
              padding: 9px 28px;
              color: #fff;
              display: inline-block;
              -webkit-border-radius: 3px;
              -moz-border-radius: 3px;
              border-radius: 3px;
              &.active {
                background-image: -webkit-linear-gradient(135deg, #00d0fb, #00acf6);
                background-image: -moz-linear-gradient(135deg, #00d0fb, #00acf6);
                background-image: -o-linear-gradient(135deg, #00d0fb, #00acf6);
                background-image: -ms-linear-gradient(135deg, #00d0fb, #00acf6);
                background-image: linear-gradient(135deg, #00d0fb, #00acf6);
              }
              &:hover {
                background-image: -webkit-linear-gradient(135deg, #00d0fb, #00acf6);
                background-image: -moz-linear-gradient(135deg, #00d0fb, #00acf6);
                background-image: -o-linear-gradient(135deg, #00d0fb, #00acf6);
                background-image: -ms-linear-gradient(135deg, #00d0fb, #00acf6);
                background-image: linear-gradient(135deg, #00d0fb, #00acf6);
              }
            }
          }
        }
      }
    }
  }
</style>
