import layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  component: layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'setting' },
  children: [
    {
      path: '/system/menu',
      name: 'menu',
      component: () => import('../../views/menu'),
      meta: { title: '菜单管理' }
    }
  ]
}
