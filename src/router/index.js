import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import routes from './routes'
const router = createRouter({
  // createWebHashHistory
  history: createWebHistory('/vue3-demo/'),
  routes
})
router.beforeEach((to, from, next) => {
  const title = to?.meta?.title || ''
  document.title = title
  !['/', '/redirect'].includes(to.path) && store.commit('ADD_HISTORY', {
    path: to.path,
    title: to.name === 'diy' ? to.path.replace(/\/diy\//, '') : to.meta.title
  })
  if (to.name === 'redirect' && !router.hasRoute(to.params.name)) {
    router.addRoute({
      name: to.params.name,
      path: to.params.path,
      component: () => import('../views/' + to.params.component),
      meta: {
        title: to.params.title
      }
    })
    next({path: to.params.path, replace: true})
  } else {
    next()
  }
  
})
export default router