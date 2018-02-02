import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//首页
const Home = r => require.ensure([], () => r(require('@/components/Home')), 'Home');

//登录
const SignIn = r => require.ensure([], () => r(require('@/components/SignIn')), 'SignIn');

//注册
const SignUp = r => require.ensure([], () => r(require('@/components/SignUp')), 'SignUp');

//忘记密码
const Forget = r => require.ensure([], () => r(require('@/components/Forget')), 'Forget');

//常设展览
const Exhibit = r => require.ensure([], () => r(require('@/components/Exhibit')), 'Exhibit');
const Survey = r => require.ensure([], () => r(require('@/components/exhibit/survey')), 'Survey');
const Guide = r => require.ensure([], () => r(require('@/components/exhibit/guide')), 'Guide');
const Round = r => require.ensure([], () => r(require('@/components/exhibit/round')), 'Round');
const Theater = r => require.ensure([], () => r(require('@/components/exhibit/theater')), 'Theater');
const TheaterDetail = r => require.ensure([], () => r(require('@/components/exhibit/theater_detail')), 'TheaterDetail');
const Succinct = r => require.ensure([], () => r(require('@/components/exhibit/succinct')), 'Succinct');
const TypeDetail = r => require.ensure([], () => r(require('@/components/exhibit/su_type_detail')), 'TypeDetail');
const SuccinctDetail = r => require.ensure([], () => r(require('@/components/exhibit/succinct_detail')), 'SuccinctDetail');

//临展信息
const Patch_exhibt = r => require.ensure([], () => r(require('@/components/Patch_exhibt')), 'Patch_exhibt');
const Patch_info = r => require.ensure([], () => r(require('@/components/patch_exhibit/patch_info')), 'Patch_info');
const Patch_detail = r => require.ensure([], () => r(require('@/components/patch_exhibit/patch_detail')), 'Patch_detail');
const Flow_science = r => require.ensure([], () => r(require('@/components/patch_exhibit/flow_science')), 'Flow_science');
const Flow_detail = r => require.ensure([], () => r(require('@/components/patch_exhibit/flow_detail')), 'Flow_detail');

//教育活动
const Edu_activity = r => require.ensure([], () => r(require('@/components/Edu_activity')), 'Edu_activity');
const All_course = r => require.ensure([], () => r(require('@/components/edu_activity/all_course')), 'All_course');
const Course_detail = r => require.ensure([], () => r(require('@/components/edu_activity/course_detail')), 'Course_detail');

//美科星
const Mkx_school = r => require.ensure([], () => r(require('@/components/Mkx_school')), 'Mkx_school');
const School_course = r => require.ensure([], () => r(require('@/components/mkx_school/school_course')), 'School_course');
const Mkx_detail = r => require.ensure([], () => r(require('@/components/mkx_school/mkx_detail')), 'Mkx_detail');

//参观服务
const Visit_serve = r => require.ensure([], () => r(require('@/components/Visit_serve')), 'Visit_serve');
const Strategy = r => require.ensure([], () => r(require('@/components/visit_serve/strategy')), 'Strategy');
const Act_calendar = r => require.ensure([], () => r(require('@/components/visit_serve/act_calendar')), 'Act_calendar');
const SE = r => require.ensure([], () => r(require('@/components/visit_serve/SE')), 'SE');
const Consult = r => require.ensure([], () => r(require('@/components/visit_serve/consult')), 'Consult');
const Notice = r => require.ensure([], () => r(require('@/components/visit_serve/notice')), 'Notice');
const Detail = r => require.ensure([], () => r(require('@/components/visit_serve/detail')), 'Detail');

//科学朋友圈
const Friends = r => require.ensure([], () => r(require('@/components/Friends')), 'Friends');

//个人中心
const User_center = r => require.ensure([], () => r(require('@/components/User_center')), 'User_center');
const Setting = r => require.ensure([], () => r(require('@/components/user_center/setting')), 'Setting');
const My_book = r => require.ensure([], () => r(require('@/components/user_center/my_book')), 'My_book');
const Manage = r => require.ensure([], () => r(require('@/components/user_center/manage')), 'Manage');

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
      meta: ['登录'],
      components: {
        'sign': SignIn
      }
    },
    {
      path: '/signUp',
      name: '注册',
      meta: ['注册'],
      components: {
        'sign': SignUp
      }
    },
    {
      path: '/forget',
      name: '忘记密码',
      meta: ['忘记密码'],
      components: {
        'sign': Forget
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
          meta: ['常设展览', '展馆概况'],
        },
        {
          path: 'guide',
          name: '楼层导览',
          component: Guide,
          meta: ['常设展览', '楼层导览'],
        },
        {
          path: 'round',
          name: '全景环游',
          component: Round,
          meta: ['常设展览', '全景环游'],
        },
        {
          path: 'theater',
          name: '影院剧场',
          component: Theater,
          meta: ['常设展览', '影院剧场'],
        },
        {
          path: 'theater-detail',
          name: '详情',
          component: TheaterDetail,
          meta: ['常设展览', '影院剧场'],
        },
        {
          path: 'succinct',
          name: '展品精粹',
          component: Succinct,
          meta: ['常设展览', '展品精粹'],
        },
        {
          path: 'type-detail',
          name: '展品精粹',
          component: TypeDetail,
          meta: ['常设展览', '展品精粹'],
        },
        {
          path: 'succinct-detail',
          name: '展品精粹',
          component: SuccinctDetail,
          meta: ['常设展览', '展品精粹'],
        },
      ]
    },
    {
      path: '/patch',
      name: '临展信息',
      component: Patch_exhibt,
      children: [
        {
          path: 'patch_info',
          component: Patch_info,
          meta: ['临展信息', '临时展览'],
        },
        {
          path: 'patch-detail',
          component: Patch_detail,
          name: '临展详情',
          meta: ['临展信息', '临时展览'],
        },
        {
          path: 'flow_science',
          component: Flow_science,
          meta: ['临展信息', '流动科技馆']
        },
        {
          path: 'flow-detail',
          component: Flow_detail,
          name: '流动详情',
          meta: ['临展信息', '流动科技馆'],
        },
      ]
    },
    {
      path: '/edu_activity',
      name: '教育活动',
      component: Edu_activity,
      children: [
        {
          path: 'all_course',
          component: All_course,
          meta: ['教育活动', '全部课程']
        },
        {
          path: 'course_detail',
          component: Course_detail,
          name: '教育详情',
          meta: ['教育活动', '全部课程']
        }
      ]
    },
    {
      path: '/mkx_school',
      name: '美科星未来学院',
      component: Mkx_school,
      meta: ['美科星未来学院'],
      children: [
        {
          path: 'school_course',
          component: School_course,
          meta: ['美科星未来学院', '学院课程']
        },
        {
          path: 'mkx_detail',
          component: Mkx_detail,
          name: '美科星详情',
          meta: ['美科星未来学院', '学院课程']
        }
      ]
    },
    {
      path: '/visit_serve',
      name: '参观服务',
      component: Visit_serve,
      children: [
        {
          path: 'strategy',
          name: '参观攻略',
          component: Strategy,
          meta: ['参观服务', '参观攻略'],
        },
        {
          path: 'act_calendar',
          name: '活动日历',
          component: Act_calendar,
          meta: ['参观服务', '活动日历'],
        },
        {
          path: 'SE',
          name: 'SE餐厅',
          component: SE,
          meta: ['参观服务', 'SE餐厅'],
        },
        {
          path: 'consult',
          name: '参观咨询',
          component: Consult,
          meta: ['参观服务', '参观咨询'],
        },
        {
          path: 'notice',
          name: '新闻公告',
          component: Notice,
          meta: ['参观服务', '新闻公告'],
        },
        {
          path: 'detail',
          name: '新闻详情',
          component: Detail,
          meta: ['参观服务', '新闻公告']
        }
      ]
    },
    {
      path: '/friends',
      name: '科学朋友圈',
      component: Friends,
      meta: ['科学朋友圈'],
    },
    {
      path: '/user_center',
      name: '个人中心',
      component: User_center,
      children: [
        {
          path: 'setting',
          name: '个人设置',
          component: Setting,
          meta: ['个人中心', '个人设置'],
        },
        {
          path: 'manage',
          name: '账号管理',
          component: Manage,
          meta: ['个人中心', '账号管理'],
        },
        {
          path: 'my_book',
          name: '我的预约',
          component: My_book,
          meta: ['个人中心', '我的预约'],
        }
      ]
    }
  ]
})
