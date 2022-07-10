<template>
  <div class="sidebar">
    <div class="menuHeader">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.itc.cn%2Fimages01%2F20210305%2F2a79ce3cdfbd42a2bc5ce8baf9c2cb5f.jpeg&refer=http%3A%2F%2Fp0.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659885904&t=bb08c9c28cb798454f3ad65098ed1e03" alt="" />
      <span>Mars</span>
    </div>
    <menu-tree></menu-tree>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree'
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  background: #001529;
  .menuHeader {
    justify-content: space-between;
    padding: 20px 10px;
    align-items: center;
    box-sizing: border-box;
    img {
      width: 40px;
    }
    span{
      font-size: 30px;
      color: #fff;
      margin-left: 10px;
    }
  }
}
</style>
