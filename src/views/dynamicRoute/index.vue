<template>
  <el-button @click="addRoute(1)">1</el-button>
  <el-button @click="addRoute(2)">2</el-button>
  <el-button @click="route=Date.now()">{{route}}</el-button>
</template>

<script>
export default {
  data() {
    return {
      route: Date.now()
    }
  },
  methods: {
    addRoute(tab) {
      const time = this.route
      this.$store.commit('SET_LIST', {
        key: time,
        value: tab
      })
      this.$router.push({
        name: 'redirect',
        params: {
          name: time,
          path: '/' + time,
          component: 'dynamicRoute/parent',
          title: time
        }
      })
    }
  }
}
</script>