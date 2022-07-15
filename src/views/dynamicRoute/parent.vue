<template>
  <el-tabs v-model="id" type="card">
    <el-tab-pane v-for="item in list" :key="item" :label="item" :name="item">
    </el-tab-pane>
  </el-tabs>
  <Child v-for="item in list" :key="item" v-show="item === id" />
</template>

<script>
import Child from './child.vue'
export default {
  components: { Child },
  data() {
    return {
      list:[],
      id: null,
      input: ''
    }
  },
  watch: {
    $route () {
      this.getList()
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      const id = this.$route.name
      const obj = this.$store.state.tabs[id]
      if (obj) {
        this.list = obj.list
        this.id = obj.id
      }
    }
  }
}
</script>