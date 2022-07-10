import layout from '../../layout'

export default {
  path: '/audit',
  name: 'audit',
  component: layout,
  redirect: '/audit/leave',
  meta: { title: '审批管理', icon: 'setting' },
  children: [
    {
      path: '/audit/approve',
      name: 'approve',
      component: () => import('../../views/approve'),
      meta: { title: '待审批' }
    }
  ]
}
