<template>
  <div class="item">
    <template
      v-if="props.item.children && props.item.path && props.item.component"
    >
      <el-menu-item :index="props.item.path">
        <span>{{ props.item.menuName }}</span>
      </el-menu-item>
    </template>
    <template v-if="props.item.children && props.item.path && props.item.icon">
      <el-sub-menu :index="props.item.path">
        <template #title>
          <span>{{ props.item.menuName }}</span>
        </template>
        <Item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
        ></Item>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped></style>
