<template>
  <div class="item-list clearfix">
    <p>{{title}}：</p>
    <ul class="list clearfix">
      <li>全部</li>
      <li v-for="(item,index) in type_list" :key="index">
        {{item.classname}}
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '面向人群'
      },
      type_list: {
        type: Array,
        default: ''
      }
    },
    data() {
      return {
      }
    }
  }
</script>
<style lang="less" scoped>
  .item-list {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px dashed #e4e4e4;
    p {
      color: #a3a3a3;
      font-size: 14px;
      display: inline-block;
      vertical-align: middle;
    }
    .list {
      display: inline-block;
      vertical-align: middle;
      li {
        color: #6c6c6c;
        font-size: 14px;
        float: left;
        cursor: pointer;
        padding: 8px 15px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        margin-left: 10px;
        margin-right: 10px;
        &:hover {
          background-image: -webkit-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -moz-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -o-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: -ms-linear-gradient(135deg, #00d0fb, #00acf6);
          background-image: linear-gradient(135deg, #00d0fb, #00acf6);
          color: #fff;
        }
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
    &:last-child{
      border-bottom: none;
    }
  }
</style>
