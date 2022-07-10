import request from '@/utils/request'

// 登录
function login(data) {
  return request({ url: '/users/login', method: 'post', data })
}

// 获取权限列表
function getAuthority() {
  return request({ url: '/users/getPermissionList', method: 'get' })
}

export { login, getAuthority }
