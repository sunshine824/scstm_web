<template>
  <div class="bottom-nav">
    <div class="clearfix layout">
      <ul class="bottom-nav-con">
        <li v-for="(item,index) in guides" :key="index" :class="item.className">
          <router-link :to="item.href" tag="p">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        guides: [
          {
            href: '/',
            className: 'traffic',
            title: '交通攻略'
          },
          {
            href: '/',
            className: 'volunter',
            title: '志愿者招募'
          },
          {
            href: '/',
            className: 'about',
            title: '关于科技馆'
          }
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .bottom-nav {
    width: 100%;
    background: #3fcdfd;
    .bottom-nav-con {
      padding: 50px 0;
      text-align: center;
      li {
        width: 370px;
        height: 230px;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        margin-right: 38px;
        background: url("../../../static/images/test/guide.png") no-repeat;
        &:last-child {
          margin-right: 0;
        }
        p {
          width: 238px;
          height: 54px;
          border: 1px solid rgba(255, 255, 255, .6);
          background-color: rgba(255, 255, 255, .3);
          color: #fff;
          font-size: 20px;
          text-align: center;
          line-height: 54px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          margin: 87px auto 0 auto;
          cursor: pointer;
        }
      }
    }
  }
</style>
