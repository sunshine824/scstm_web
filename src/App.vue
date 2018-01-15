<template>
  <div id="app" v-cloak>
    <div class="head">
      <Header/>
      <ind-nav :logo="logo"/>
    </div>

    <router-view/>

    <div class="foot" v-if="foot.data">
      <guide/>
      <Footer :phones="foot.data.end_phone"
              :ewm="foot.data.wx"
              :options="foot.data.related_url"
              :number="foot.data.number"/>
    </div>
  </div>
</template>

<script>
  import {getAjax} from '@/public/js/config'
  import Header from '@/base/Head/header'
  import IndNav from '@/base/Head/ind_nav'
  import Guide from '@/base/Foot/guide'
  import Footer from '@/base/Foot/footer'

  export default {
    name: 'app',
    components: {
      Header,
      IndNav,
      Guide,
      Footer,
    },
    data() {
      return {
        logo: '',
        foot: ''
      }
    },
    created() {
      this.getLogoData()
      this.getFootInfoData()
    },
    methods: {
      /**
       * 获取logo
       */
      getLogoData() {
        const url = 'api/logo'
        getAjax(url, {},
          (res) => {
            //console.log(res)
            this.logo = res.data.logo
          }, (err) => {
            console.log(err)
          }, this)
      },

      /**
       * 获取底部数据
       */
      getFootInfoData() {
        const url = 'api/thetail'
        getAjax(url, {},
          (res) => {
            //console.log(res)
            this.foot = res
          }, (err) => {
            console.log(err)
          }, this)
      }
    }
  }
</script>

<style lang="less">
  @import "./public/css/base.css";

  .layout {
    width: 1200px;
    margin: 0 auto;
  }

  .item {
    .ivu-select-selection {
      background-color: #5e7482 !important;
      border: none;
      border-radius: 4px;
      height: 38px;
    }
    .ivu-select-input {
      font-size: 14px;
      height: 38px;
      text-align: center;
    }
    .ivu-select-arrow {
      color: rgba(255, 255, 255, .9);
    }
  }
</style>
