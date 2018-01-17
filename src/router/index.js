import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//首页
const Home = r => require.ensure([], () => r(require('@/components/Home')), 'Home');

//登录
const SignIn = r => require.ensure([], () => r(require('@/components/SignIn')), 'SignIn');

//注册
const SignUp = r => require.ensure([], () => r(require('@/components/SignUp')), 'SignUp');

//常设展览
const Exhibit = r => require.ensure([], () => r(require('@/components/Exhibit')), 'Exhibit');
const Survey = r => require.ensure([], () => r(require('@/components/exhibit/survey')), 'Survey');
const Guide = r => require.ensure([], () => r(require('@/components/exhibit/guide')), 'Guide');
const Round = r => require.ensure([], () => r(require('@/components/exhibit/round')), 'Round');
const Theater = r => require.ensure([], () => r(require('@/components/exhibit/theater')), 'Theater');
const TheaterDetail = r => require.ensure([], () => r(require('@/components/exhibit/theater_detail')), 'TheaterDetail');
const Succinct = r => require.ensure([], () => r(require('@/components/exhibit/succinct')), 'Succinct');

//临展信息
const Patch_exhibt = r => require.ensure([], () => r(require('@/components/Patch_exhibt')), 'Patch_exhibt');
const Patch_info = r => require.ensure([], () => r(require('@/components/patch_exhibit/patch_info')), 'Patch_info');
const Flow_science = r => require.ensure([], () => r(require('@/components/patch_exhibit/flow_science')), 'Flow_science');

//教育活动
const Edu_activity = r => require.ensure([], () => r(require('@/components/Edu_activity')), 'Edu_activity');
const All_course = r => require.ensure([], () => r(require('@/components/edu_activity/all_course')), 'All_course');

//美科星
const Mkx_school = r => require.ensure([], () => r(require('@/components/Mkx_school')), 'Mkx_school');

//参观服务
const Visit_serve = r => require.ensure([], () => r(require('@/components/Visit_serve')), 'Visit_serve');

//科学朋友圈
const Friends = r => require.ensure([], () => r(require('@/components/Friends')), 'Friends');

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      meta: ['首页'],
    },
    {
      path: '/signIn',
      name: '登录',
      components: {
        'sign': SignIn
      }
    },
    {
      path: '/signUp',
      name: '注册',
      components: {
        'sign': SignUp
      }
    },
    {
      path: '/exhibit',
      name: '常设展览',
      component: Exhibit,
      children: [
        {
          path: 'survey',
          name: '展馆概况',
          component: Survey,
          meta: ['常设展览','展馆概况'],
        },
        {
          path: 'guide',
          name:'楼层导览',
          component: Guide,
          meta: ['常设展览','楼层导览'],
        },
        {
          path: 'round',
          name:'全景环游',
          component: Round,
          meta: ['常设展览','全景环游'],
        },
        {
          path: 'theater',
          name:'影院剧场',
          component: Theater,
          meta: ['常设展览','影院剧场'],
        },
        {
          path: 'theater/:id',
          name:'影院剧场',
          component: TheaterDetail,
          meta: ['常设展览','影院剧场'],
        },
        {
          path: 'succinct',
          name:'藏品精粹',
          component: Succinct,
          meta: ['常设展览','藏品精粹'],
        },
      ]
    },
    {
      path: '/patch',
      name: '',
      component: Patch_exhibt,
      children: [
        {
          path: 'patch_info',
          component: Patch_info,
          meta: [],
        },
        {
          path: 'flow_science',
          component: Flow_science,
          meta: []
        }
      ]
    },
    {
      path: '/edu_activity',
      name: '',
      component: Edu_activity,
      children: [
        {
          path: 'all_course',
          component: All_course,
          meta: []
        }
      ]
    },
    {
      path: '/mkx_school',
      name: 'mkx',
      component: Mkx_school
    },
    {
      path: '/visit_serve',
      name: 'visit',
      component: Visit_serve
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    }
  ]
})
