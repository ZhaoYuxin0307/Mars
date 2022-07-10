import store from './store'
import router from './router'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.userInfo.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const premissionList = store.getters.premissionList
      if (token && premissionList) {
        next()
      } else {
        const res = await store.dispatch('user/handleAuthority')
        if (res) {
          next(to.path)
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
