import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/exhibit',
      name: 'exhibit',
      component: resolve => require(['@/components/Exhibit'], resolve)
    },
    {
      path: '/patch_exhibt',
      name: 'patch',
      component: resolve => require(['@/components/Patch_exhibt'], resolve)
    },
    {
      path: '/edu_activity',
      name: 'Edu',
      component: resolve => require(['@/components/Edu_activity'], resolve)
    },
    {
      path: '/mkx_school',
      name: 'mkx',
      component: resolve => require(['@/components/Mkx_school'], resolve)
    },
    {
      path: '/visit_serve',
      name: 'visit',
      component: resolve => require(['@/components/Visit_serve'], resolve)
    },
    {
      path: '/friends',
      name: 'friends',
      component: resolve => require(['@/components/Friends'], resolve)
    }
  ]
})
