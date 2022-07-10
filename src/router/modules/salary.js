import layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  component: layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'setting' },
  children: [
    {
      path: '/system/salary',
      name: 'salary',
      component: () => import('../../views/salary'),
      meta: { title: '薪酬管理' }
    }
  ]
}
