<template>
  <Page :total="total" @on-change="handleChange"></Page>
</template>
<script type="text/ecmascript-6">
  import {Page} from 'iview'

  export default {
    props: {
      total: {
        type: Number,
        default: ''
      }
    },
    components: {
      Page
    },
    data() {
      return {}
    },
    methods: {
      handleChange(page) {
        this.$emit('handleChange', page)
      }
    }
  }
</script>
<style lang="less">
  .ivu-page {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 100px;
    .ivu-page-item-active {
      background-color: #28bbff;
      border-color: #28bbff;
    }
    .ivu-page-item:hover {
      border-color: #28bbff;
    }
    .ivu-page-next:hover, .ivu-page-prev:hover {
      border-color: #28bbff;
    }
  }
</style>
