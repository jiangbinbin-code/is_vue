<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">首页</router-link>
   <!--通过route跳转页面
       步骤 1::先在components里面写content.vue组件
           2 在route目录的js文件写路由规则
           3 在app里使用content 可跳转
       -->
    <router-link to="/content">内容页</router-link>
   <router-view/>   <!-- 把路由配置跳转的组件导入-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
