<template>
  <div class="swiper-con">
    <swiper :options="swiperOption">

      <swiper-slide
        v-for="(item,index) in banners"
        :key="index"
        :style="{background: 'url('+item.banner+') no-repeat center center'}">
        <h2 class="ani top" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0.2s">
          让科学流行起来</h2>
        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0.4s">
          四川科技馆全新启幕</p>
      </swiper-slide>

      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import '@/public/css/animate.min.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    props: {
      banners: {
        default: ''
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    data() {
      const _this = this
      return {
        swiperOption: {
          spaceBetween: 5,
          speed: 1500,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<div class="silde-item ${className} ">
                        <span class="swiper-pagination-bullet-custom"></span>
                        <p class="txt">${_this.banners[index].note}</p>
                      </div>`
            }
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            init: function () {
              swiperAnimateCache(this); //隐藏动画元素
              swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
          }
        }
      }
    },

    mounted() {
      //console.log(this.banners)
    }
  }
</script>
<style lang="less">
  .swiper-con {
    width: 100%;
    height: 850px;
  }

  .swiper-container {
    height: 100%;
  }

  .swiper-slide {
    h2 {
      font-size: 45px;
      color: #fff;
      text-align: right;
      font-weight: 700;
      margin-right: 200px;
      margin-top: 350px;
    }
    p {
      font-size: 25px;
      color: rgba(255, 255, 255, .9);
      text-align: right;
      margin-top: 20px;
      margin-right: 200px;
    }
  }

  .swiper-pagination {
    bottom: 30px !important;
    &:after {
      content: '';
      position: absolute;
      border: 1px dotted rgba(255, 255, 255, .7);
      bottom: 29px;
      width: 100%;
      left: 0;
      z-index: -1;
    }
    .silde-item {
      width: 230px;
      display: inline-block;
      .txt {
        color: #fff;
        margin-top: 5px;
        transition: all .2s linear;
      }
      &.swiper-pagination-bullet-active {
        background: none;
        .swiper-pagination-bullet-custom {
          color: #fff;
          background: #29bcff;
          border: 1px solid #fff;
          width: 15px;
          height: 15px;
        }
        .txt {
          color: #29bcff;
        }
      }
      &.swiper-pagination-bullet {
        opacity: 1;
        background: none;
      }
    }
  }

  .swiper-pagination-bullet-custom {
    width: 12px;
    height: 12px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    border: 1px solid rgba(255, 255, 255, .4);
    background: rgba(5, 71, 97, 1);
    display: inline-block;
    border-radius: 50%;
    transition: all .5s linear;
  }
</style>
