import layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  component: layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'setting' },
  children: [
    {
      path: '/system/user',
      name: 'user',
      component: () => import('../../views/user'),
      meta: { title: '用户管理' }
    },
    {
      path: '/system/role',
      name: 'role',
      component: () => import('../../views/role'),
      meta: { title: '角色管理' }
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../../views/staff'),
      meta: { title: '员工管理' }
    },
    {
      path: '/system/salary',
      name: 'salary',
      component: () => import('../../views/salary'),
      meta: { title: '薪酬管理' }
    },
    {
      path: '/system/menu',
      name: 'menu',
      component: () => import('../../views/menu'),
      meta: { title: '菜单管理' }
    },
    {
      path: '/system/dept',
      name: 'dept',
      component: () => import('../../views/dept'),
      meta: { title: '部门管理' }
    }
  ]
}
