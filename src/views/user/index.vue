<template>
  <query-form :queryClum="queryClum" :model="query"></query-form>
  <base-table
    :tableClum="tableClum"
    :checkbox="checkbox"
    :tableBtn="tableBtn"
  ></base-table>
</template>

<script setup>
import QueryForm from '../../components/QueryForm.vue'
import { reactive, ref } from 'vue'

const checkbox = ref(true)

const tableBtn = reactive([
  {
    name: '新增',
    method: 'add',
    size: 'default',
    type: 'primary'
  },
  {
    name: '批量删除',
    method: 'delAll',
    size: 'default',
    type: 'danger'
  }
])

const tableClum = reactive([
  {
    label: '用户ID',
    prop: 'userId'
  },
  {
    label: '用户名',
    prop: 'userName'
  },
  {
    label: '用户邮箱',
    prop: 'userEmail'
  },
  {
    label: '用户角色',
    prop: 'roleList'
  },
  {
    label: '用户状态',
    prop: 'state'
  },
  {
    label: '注册时间',
    prop: 'createTime'
  },
  {
    label: '最后登录时间',
    prop: 'lastLoginTime'
  },
  {
    type: 'btn',
    label: '操作',
    width: '300px',
    btns: [
      {
        name: '编辑',
        method: 'edit',
        size: 'default'
      },
      {
        name: '删除',
        method: 'del',
        size: 'default',
        type: 'danger'
      }
    ]
  }
])

const query = reactive({
  userId: '',
  userName: '',
  state: ''
})
const queryClum = reactive([
  {
    label: '用户ID',
    prop: 'userId',
    type: 'text',
    placeholder: '请输入用户ID'
  },
  {
    label: '用户名称',
    prop: 'userName',
    type: 'text',
    placeholder: '请输入用户名称'
  },
  {
    label: '状态',
    prop: 'state',
    type: 'option',
    placeholder: '',
    options: [
      {
        label: '所有',
        value: 0
      },
      {
        label: '在职',
        value: 1
      },
      {
        label: '离职',
        value: 2
      },
      {
        label: '试用期',
        value: 3
      }
    ]
  },
  {
    type: 'btn',
    btns: [
      {
        name: '查询',
        type: 'primary',
        method: 'query',
        size: 'default'
      },
      {
        name: '重置',
        method: 'reset',
        size: 'default'
      }
    ]
  }
])
</script>

<style lang="scss" scoped></style>
