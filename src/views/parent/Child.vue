<template>
<h1>child</h1>
  <p>
  <input v-model="form.username.firstName" type="text">
  </p>
  <p>
  <input v-model="form.username.lastName" type="text">
  </p>
  <p>
  <input v-model="form.sex" type="text">
  </p>
  <p>
  <input v-model="form.age" type="text">
  </p>
  <p>
  <button @click="add">++++++++</button>
  <button @click="form.family.splice(form.family.length - 1, 1)">-----------</button>
  </p>
  <ul>
    <li v-for="(person, i) in form.family" :key="i">
      <input type="text" v-model="person.username.firstName">
      <input type="text" v-model="person.username.lastName">
    </li>
  </ul>
</template>

<script>
export default {
  props: ['initForm'],
  data() {
    return {
      form: this.initForm
    }
  },
  methods: {
    add() {
      this.form.family.push({
        username: {
          firstName: '',
          lastName: ''
        }
      })
    }
  }
}
</script>