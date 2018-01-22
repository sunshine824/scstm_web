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
    height: 40px;
    background: #f7f7f7;
    line-height: 40px;
    border-radius: 6px;
    overflow: hidden;
    li {
      display: inline-block;
      color: #555555;
      font-size: 16px;
      cursor: pointer;
      width: 140px;
      text-align: center;
      border-right: 1px solid #fff;
      &.active {
        background-image: -webkit-linear-gradient(135deg, #00d0fb, #00acf6);
        background-image: -moz-linear-gradient(135deg, #00d0fb, #00acf6);
        background-image: -o-linear-gradient(135deg, #00d0fb, #00acf6);
        background-image: -ms-linear-gradient(135deg, #00d0fb, #00acf6);
        background-image: linear-gradient(135deg, #00d0fb, #00acf6);
        color: #fff;
      }
    }
  }
</style>
