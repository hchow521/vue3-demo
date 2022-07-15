<template>
  <div>
    <h1>parent</h1>
    <p>username: {{form.username}}</p>
    <p>sex: {{form.sex}}</p>
    <p>age: {{form.age}}</p>
    <p>family: {{form.family}}</p>
    <button @click="log(form)">console</button>
    <Child :initForm="form" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Child: defineAsyncComponent(() => import('./Child')),
  },
  data() {
    return {
      form: {
        username: {
          firstName: '',
          lastName: ''
        },
        sex: '',
        age: '',
        family: []
      }
    }
  },
  created() {
    this.log = console.log
  }
}
</script>