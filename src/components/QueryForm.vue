<template>
  <div class="query-from">
    <el-form :inline="true" :model="props.model" class="demo-form-inline">
      <template v-for="(v, i) in props.queryClum" :key="i">
        <template v-if="v.type === 'text'">
          <el-form-item v-bind="v">
            <el-input
              v-model="props.model[v.prop]"
              :placeholder="v.placeholder"
            />
          </el-form-item>
        </template>

        <template v-if="v.type === 'option'">
          <el-form-item v-bind="v">
            <el-select
              v-model="props.model[v.prop]"
              :placeholder="v.placeholder"
            >
              <el-option
                v-for="(item, index) in v.options"
                :key="index"
                v-bind="item"
              />
            </el-select>
          </el-form-item>
        </template>

        <template v-if="v.type === 'btn'">
          <el-form-item>
            <el-button
              v-for="(j, k) in v.btns"
              :key="k"
              :type="j.type"
              :size="j.size"
              @click="onSubmit(j.method)"
              >{{ j.name }}</el-button
            >
          </el-form-item>
        </template>
      </template>
    </el-form>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  model: {
    type: Object,
    default: () => {}
  },
  queryClum: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.query-from {
  background-color: #fff;
  padding: 22px 20px 0;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
