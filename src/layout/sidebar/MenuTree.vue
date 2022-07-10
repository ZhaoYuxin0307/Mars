<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#001529"
    class="el-menu-vertical-demo"
    :default-active="$route.path"
    text-color="#fff"
    style="height: scale(100%-75px)"
    router
  >
    <Item v-for="v in menuList" :key="v.path" :item='v'></Item>
  </el-menu>
</template>

<script setup>
import Item from './Item'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const menuList = computed(() => {
  return store.getters.premissionList.menuList
})
</script>

<style lang="scss" scoped>
.el-menu{
  border: none;
}
</style>
