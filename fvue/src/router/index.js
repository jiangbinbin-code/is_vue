import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content'
// import HelloWorld from '@/components/HelloWorld'
/*
* 路由 做界面跳转
* */
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 路由跳转路径
      path: '/content',
      // 路由名称
      name: '/Content',
      // 路由跳转组件
      component: Content
    }
  ]
})
