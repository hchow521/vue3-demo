<template>
  <div class="page">
    <h1>Welcome to {{decodeURIComponent($route.path.replace('/', ''))}}</h1>
    <p>你可以 <router-link to="/">返回首页</router-link> 或 <a href="javascript:void(0)" @click="routeTo">随机跳转</a> 到另一页面</p>
  </div>
</template>
<script>
export default {
  setup() {
    const random = Math.random()
    return {
      random
    }
  },
  methods: {
    routeTo() {
      this.$store.commit('ADD_PAGE', {
        title: this.random,
        path: '/diy/' + encodeURIComponent(this.random)
      })
      this.$router.push('/diy/' + encodeURIComponent(this.random))
    }
  }
}
</script>