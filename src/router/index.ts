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
    path: '/register',
    component: () => import('@/views/Register/index.vue'),
    name: 'register'
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile/index.vue'),
    name: 'profile'
  },
  {
    path: '/login2',
    component: () => import('@/views/Login2/index.vue'),
    name: 'login2'
  },
  {
    path: '/forgetPd',
    component: () => import('@/views/ForgetPd/index.vue'),
    name: 'forgetPd'
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
    to.path === '/register' ||
    to.path === '/login' ||
    to.path === '/profile' ||
    to.path === '/login2'
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
