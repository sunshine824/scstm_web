<template>
  <div class="header">
    <div class="layout clearfix">
      <p class="notice">
        当瞬时在关人数达到5700人时，我馆将采取限流措施，请予理解配合
      </p>
      <ul class="sign">
        <li>
          <router-link to="/signIn">登录</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/signUp">注册</router-link>
        </li>
        <li>|</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .header {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
    .layout {
      width: 1200px;
      margin: 0 auto;
      padding: 0 10px;
      .notice {
        float: left;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        color: #666;
      }
      .sign{
        float: right;
        li{
          display: inline-block;
          line-height: 40px;
          margin-left: 10px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
