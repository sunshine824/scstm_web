<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import "./public/css/base.css";
  .layout{
    width: 1200px;
    margin: 0 auto;
  }
  .item{
    .ivu-select-selection{
      background-color: #5e7482 !important;
      border:none;
      border-radius: 4px;
      height: 38px;
    }
    .ivu-select-input{
      font-size: 14px;
      height: 38px;
      text-align: center;
    }
    .ivu-select-arrow{
      color: rgba(255,255,255,.9);
    }
  }
</style>
