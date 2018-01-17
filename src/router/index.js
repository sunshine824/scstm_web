import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('@/components/Home')), 'Home');
const SignIn = r => require.ensure([], () => r(require('@/components/SignIn')), 'SignIn');
const SignUp = r => require.ensure([], () => r(require('@/components/SignUp')), 'SignUp');

const Exhibit = r => require.ensure([], () => r(require('@/components/Exhibit')), 'Exhibit');
const Survey = r => require.ensure([], () => r(require('@/components/exhibit/survey')), 'Survey');
const Guide = r => require.ensure([], () => r(require('@/components/exhibit/guide')), 'Guide');
const Round = r => require.ensure([], () => r(require('@/components/exhibit/round')), 'Round');
const Theater = r => require.ensure([], () => r(require('@/components/exhibit/theater')), 'Theater');
const TheaterDetail = r => require.ensure([], () => r(require('@/components/exhibit/theater_detail')), 'TheaterDetail');
const Succinct = r => require.ensure([], () => r(require('@/components/exhibit/succinct')), 'Succinct');

const Patch_exhibt = r => require.ensure([], () => r(require('@/components/Patch_exhibt')), 'Patch_exhibt');
const Patch_info = r => require.ensure([], () => r(require('@/components/patch_exhibit/patch_info')), 'Patch_info');
const Flow_science = r => require.ensure([], () => r(require('@/components/patch_exhibit/flow_science')), 'Flow_science');


const Edu_activity = r => require.ensure([], () => r(require('@/components/Edu_activity')), 'Edu_activity');
const All_course = r => require.ensure([], () => r(require('@/components/edu_activity/all_course')), 'All_course');


const Mkx_school = r => require.ensure([], () => r(require('@/components/Mkx_school')), 'Mkx_school');
const Visit_serve = r => require.ensure([], () => r(require('@/components/Visit_serve')), 'Visit_serve');
const Friends = r => require.ensure([], () => r(require('@/components/Friends')), 'Friends');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signIn',
      name: 'signIn',
      components: {
        'sign': SignIn
      }
    },
    {
      path: '/signUp',
      name: 'signUp',
      components: {
        'sign': SignUp
      }
    },
    {
      path: '/exhibit',
      name: '',
      component: Exhibit,
      children: [
        {
          path: 'survey',
          component: Survey,
          meta: [],
        },
        {
          path: 'guide',
          component: Guide,
          meta: [],
        },
        {
          path: 'round',
          component: Round,
          meta: [],
        },
        {
          path: 'theater',
          component: Theater,
          meta: [],
        },
        {
          path: 'theater/:id',
          component: TheaterDetail
        },
        {
          path: 'succinct',
          component: Succinct,
          meta: [],
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
