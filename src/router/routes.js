export default [
  {
    path: '/',
    component: () => import('@/views/index'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/provide',
    component: () => import('@/views/provide'),
    meta: {
      title: '新特性provide'
    }
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('@/views/transition/index'),
    meta: {
      title: '过渡transition'
    }
  },
  {
    path: '/diy/:any',
    name: 'diy',
    component: () => import('@/views/any'),
    meta: {
      title: '自定义路由'
    },
    hide: true
  },
  {
    path: '/canvas',
    component: () => import('@/views/canvas'),
    meta: {
      title: '画布'
    }
  },
  {
    path: '/ball',
    component: () => import('@/views/ball/index.js'),
    meta: {
      title: '画布-球'
    }
  },
  {
    path: '/parent',
    component: () => import('@/views/parent'),
    meta: {
      title: 'parent-child'
    }
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import('@/views/redirect'),
    hide: true
  },
  {
    path: '/dynamicRoute',
    name: 'dynamicRoute',
    component: () => import('@/views/dynamicRoute'),
    meta: {
      title: '动态路由'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/error/404'),
    meta: {
      title: '网页丢失了'
    },
    hide: true
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test'),
    meta: {
      title: '测试'
    }
  }
]