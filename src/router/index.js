import { createRouter, createWebHashHistory } from 'vue-router'
import user from './modules/user'
import leave from './modules/leave'
import layout from '../layout'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404')
      },
      { path: '*', redirect: '/404', hidden: true }
    ]
  },
  user,
  leave
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
