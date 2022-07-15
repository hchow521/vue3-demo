<template>
  <div>
    <test-component />
  </div>
  <!-- 父组件：<input v-model="msg"> -->
</template>

<script>
import { provide, ref, readonly } from 'vue'
import TestComponent from './TestComponent.vue'
export default {
  name: 'App',
  components: {
    TestComponent
  },
  setup() {
    // 声明响应式变量
    const msg = ref('hellow')
    // 声明函数修改msg值
    const updateMsg = val => {
      msg.value = val
    }
    // 子组件可访问provided
    // readonly只读不可修改
    provide('msg', readonly(msg))
    // 子组件修改provided
    provide('updateMsg', updateMsg)
    // return可以在组件内使用
    // return {
    //   msg
    // }
  }
}
</script>

<style>

</style>