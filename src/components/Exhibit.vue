<template>
  <div class="exhibit">
    <banner :mold="mold"/>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from '@/base/banner'

  export default {
    components: {
      Banner,
    },
    data() {
      return {
        mold: ''
      }
    },
    watch: {
      "$route"(to, from) {
        console.log(to)
      }
    }
  }
</script>
<style lang="less" scoped>
  .exhibit {
    position: relative;
  }
</style>
