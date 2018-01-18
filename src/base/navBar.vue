<template>
  <ul class="m-type clearfix">
    <li v-for="(item,index) in navBar"
        :key="index"
        @click="handleClick(index,item.id)"
        :class="{active:index===current}">
      {{item.title}}
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      navBar: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        current: 0
      }
    },
    methods: {
      handleClick(index, id) {
        this.current = index
        this.$emit('handleClick', id)
      }
    }
  }
</script>
<style scoped lang="less">
  .m-type {
    margin-bottom: 30px;
    li {
      display: inline-block;
      color: #333;
      font-size: 18px;
      margin-right: 30px;
      cursor: pointer;
      &.active {
        color: #1bb6ef;
        font-size: 22px;
      }
    }
  }
</style>
