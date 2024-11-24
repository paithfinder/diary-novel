import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'
export const Layout = () => import('@/views/Layout/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    name: 'layout',
    redirect: '/bookshelf',
    children: [
      {
        path: '/bookshelf',
        component: () => import('@/views/Bookshelf/index.vue'),
        name: 'bookshelf'
      },
      {
        path: '/my',
        component: () => import('@/views/My/index.vue'),
        name: 'my'
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    name: 'login'
  },
  {
    path: '/register_step1',
    component: () => import('@/views/Register1/index.vue'),
    name: 'register_step1'

  },
  {
    path: '/register_step2',
    component: () => import('@/views/Register2/index.vue'),
    name: 'register_step2'

  },
  {
    path: '/profile',
    component: () => import('@/views/Profile/index.vue'),
    name: 'profile'
  },
  {
    path: '/forgetPd',
    component: () => import('@/views/ForgetPd/index.vue'),
    name: 'forgetPd'
  },
  {
    path: '/newPd',
    component: () => import('@/views/newPd/index.vue'),
    name: 'newPd'
  },
  {
    path: '/curbook/:type/:bookId',
    component: () => import('@/views/CurBook/index.vue'),
    name: 'curbook'
  },
  {
    path: '/chapterDetail',
    component: () => import('@/views/ChapterDetail/index.vue'),
    name: 'chapterDetail'
  },
  {
    path: '/chapterEdit',
    component: () => import('@/views/ChapterEdit/index.vue'),
    name: 'chapterEdit'
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
// 前置导航守卫
router.beforeEach((to, from, next) => {
  if (
    to.path === '/register_step1' ||
    to.path === '/login' ||
    to.path === '/profile' ||
    to.path === '/register_step2'||
    to.path === '/forgetPd'
  )
    return next()
  const store = useUserStore()
  // 已注册（存在用户信息）
  if (store.user && store.user.TOKEN) {
    // 如果用户已登录 访问注册和登陆页面时直接进入主页
    return next()
  } else {
    next('/login')
  }
})

export default router
