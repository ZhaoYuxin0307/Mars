<template>
  <div class="login">
    <div class="login-form">
      <div class="title">火星</div>
      <div class="form-content">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
          <el-form-item prop="userName">
            <el-input v-model.trim="ruleForm.userName" autocomplete="off">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input
              v-model.trim="ruleForm.userPwd"
              type="password"
              autocomplete="off"
            >
              <template #prefix>
                <el-icon><View /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="handleLogin"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { validatePass } from './validate'
import { View, User } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const ruleForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})

const rules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, validator: validatePass, trigger: 'blur' }]
})

/**
 * 登录
 */
const ruleFormRef = ref()
function handleLogin() {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const res = await store.dispatch('user/handleLogin', ruleForm)
      if (res) router.push('/')
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.scimall.org.cn%2Fcollect%2F2019%2F08%2F10%2F20190810120248_869ef3.jpg&refer=http%3A%2F%2Fimg.scimall.org.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659885887&t=a94df75a756186ca00aa8abf83b64b90')
    no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-end;
  .login-form {
    margin: auto;
    // margin-top: 30px;
    // margin-right: 300px;
    height: 230px;
    width: 400px;
    padding: 20px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
    .title {
      font-size: 30px;
      text-align: center;
      color: #fff;
      margin-bottom: 30px;
    }
  }
}
</style>
