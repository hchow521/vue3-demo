<!-- 单文件组件 -->
<template>
  <Title :level=1>{{msg}}</Title>
  <!-- Teleport 提供了一种干净的方法，允许我们控制在 DOM 中哪个父节点下渲染了 HTML，
  而不必求助于全局状态或将其拆分为两个组件。 -->
  <teleport to="#app">
    <input v-model.lazy="value" @change="changeMsg">
  </teleport>
</template>

<script>
// 异步懒加载组件
import { defineAsyncComponent } from 'vue'
export default {
  name: 'msg-component',
  inject: ['msg', 'updateMsg'],
  components: {
    Title: defineAsyncComponent(() => import('./Title'))
  },
  data() {
    return {
      value: ''
    }
  },
  created() {
    this.value = this.msg
  },
  methods: {
    changeMsg(el) {
      const value = el.target.value
      // 只读无法修改，需要调用父组件provided的updateMsg方法
      // this.msg.value = value
      this.updateMsg(value)
    }
  }
}
</script>

<style>

</style>