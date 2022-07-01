import UserApi from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token

      //   别人 vue-element-template  cookie js-cookie插件
      // cookie.get() 或 cookie.set()

      //   localStorage sessionStorage cookie indexDB
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      console.log(response)
    }
  }
}
