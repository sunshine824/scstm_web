<template>
  <div class="exhibit">
    <banner/>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'
  export default {
    components:{
      Banner,
    },
    data() {
      return {}
    }
  }
</script>
<style lang="less" scoped>
  .exhibit{
    position: relative;
  }
</style>
