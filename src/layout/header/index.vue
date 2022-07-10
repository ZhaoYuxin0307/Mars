<template>
  <div class="head">
    <div class="left">
      <el-icon><Fold /></el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.path === '/welcome'"
          >欢迎体验Vue3全栈课程</el-breadcrumb-item
        >
        <el-breadcrumb-item v-else>{{ crumbs.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-icon><Bell /></el-icon>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link"> {{ userInfo.userName }} </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{ userInfo.userEmail }}</el-dropdown-item>
            <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Fold, Bell, ArrowRight } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { computed, watch, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()

const userInfo = computed(() => {
  return store.getters.userInfo
})

function handleCommand(val) {
  if (val === 'logOut') logOut()
}

function logOut() {
  store.dispatch('user/logOut')
  router.push('/login')
}

const crumbs = reactive({
  title: ''
})

watch(
  () => route.matched,
  (newVal, oldVal) => {
    console.log(newVal)
    // console.log(oldVal)
    if (newVal[0].path !== '/login') {
      crumbs.title = newVal[1].meta.title
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .el-icon {
      margin-right: 15px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .el-icon {
      margin-right: 15px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
    }
  }
}
</style>
