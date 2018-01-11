<template>
  <div class="hello">
    <p class="txt">hello world!</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello{
    width: 100px;
    height: 100px;
    border:1px solid #000;
    .txt{
      color: red;
    }
  }
</style>
