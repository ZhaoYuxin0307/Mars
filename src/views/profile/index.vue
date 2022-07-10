<template>
  <div class="profile">
    <div class="content">
      <p>欢迎体验</p>
      <p>慕课通用后台管理系统</p>
      <p>- Vue3.0+ElementPlus+Node+Mongo打造通用后台管理系统</p>
    </div>
    <div class="img">
      <img src="http://manager.9yuecloud.com/img/welcome.7a3ee224.png" alt="" />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.content {
  p {
    &:nth-child(1) {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    &:nth-child(2) {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    &:nth-child(3) {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
}
.img {
  width: 371px;
  height: 438px;
  margin-left: 105px;
}
</style>
