import layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  component: layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'setting' },
  children: [
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../../views/staff'),
      meta: { title: '员工管理' }
    }
  ]
}
