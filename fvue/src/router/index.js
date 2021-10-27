import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import MemberList from '../views/Member/MemberList'
import MemberLevel from '../views/Member/MemberLevel'

// import HelloWorld from '@/components/HelloWorld'
/*
* 路由 做界面跳转
* */
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 路由跳转路径
      path: '/login',
      // 路由名称
      name: 'Login',
      // 路由跳转组件
      component: Login
    },
    {
      // 路由跳转路径
      path: '/main',
      // 路由名称
      name: 'Main',
      // 路由跳转组件
      component: Main,
      // 创建子路由
      children: [
        {
          // 会员列表
          path: '/member/list/:id',
          name: '/MemberList',
          component: MemberList
        },
        {
          // 会员等级
          path: '/member/level/:id',
          name: '/MemberLevel',
          component: MemberLevel,
          props: true
        }
      ]
    }
  ]
})
