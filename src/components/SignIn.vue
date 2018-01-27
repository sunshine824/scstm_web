<template>
  <sign-bg>
    <div class="sign-box">
      <p class="sign-title">登录</p>

    </div>
  </sign-bg>
</template>
<script type="text/ecmascript-6">
  import SignBg from '@/base/signBg'

  export default {
    components: {
      SignBg
    },
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .sign-box {
    width: 420px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background: rgba(0, 0, 0, .6);
    padding: 35px;
    float: right;
    .sign-title {
      font-size: 30px;
      text-align: center;
      color: #fff;
      padding-bottom: 30px;
    }
  }
</style>
