import layout from '../../layout'
export default {
  path: '/system',
  name: 'system',
  component: layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'setting' },
  children: [
    {
      path: '/system/role',
      name: 'role',
      component: () => import('../../views/role'),
      meta: { title: '角色管理' }
    }
  ]
}
