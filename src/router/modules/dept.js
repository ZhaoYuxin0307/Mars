import layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  component: layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'setting' },
  children: [
    {
      path: '/system/dept',
      name: 'dept',
      component: () => import('../../views/dept'),
      meta: { title: '部门管理' }
    }
  ]
}
