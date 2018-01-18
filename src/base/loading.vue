<template>
  <div class="loading">
    <Icon type="load-d" class="load"></Icon>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Icon} from 'iview'

  export default {
    components: {
      Icon
    },
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(212, 212, 212, 1);
    .load {
      font-size: 40px;
      color: #fff;
      position: absolute;
      top: 50%;
      margin-top: -20px;
      left: 50%;
      margin-left: -15px;
      z-index: 100;
      animation: loading 1.5s linear infinite;
    }
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
