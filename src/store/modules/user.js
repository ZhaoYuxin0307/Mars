import { login, getAuthority } from '@/api/user'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    userInfo: getItem('userInfo') || {},
    premissionList: getItem('premissionList')
  },
  mutations: {
    SET_USER_INFO(state, res) {
      state.userInfo = res
      setItem('userInfo', res)
    },
    SET_PERMISSION(state, res) {
      state.premissionList = res
      setItem('premissionList', res)
    }
  },
  actions: {
    async handleLogin({ commit }, params) {
      const res = await login(params)
      // console.log(res)
      commit('SET_USER_INFO', res)
      return res
    },
    async handleAuthority({ commit }) {
      const res = await getAuthority()
      commit('SET_PERMISSION', res)
      return res
    },
    logOut({ commit }) {
      commit('SET_USER_INFO', '')
      commit('SET_PERMISSION', '')
    }
  }
}
