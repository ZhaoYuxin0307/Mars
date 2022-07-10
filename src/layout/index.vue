<template>
  <el-container>
    <el-aside width="200px">
      <app-sidebar></app-sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AppHeader from './header'
import AppSidebar from './sidebar'
import AppMain from './appmain'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-aside {
    height: 100%;
  }
  .el-header {
    background: #fff;
    height: 50px;
  }
}
</style>
