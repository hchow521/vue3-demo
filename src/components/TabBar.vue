<template>
  <div class="tab-bar">
    <router-link v-for="(route, i) in history" :key="route.path" :to="route.path" custom v-slot="{ navigate }">
      <div class="route-tab" :class="{ active: route.path === $route.path }" @click="navigate">
        <span v-text="route.title"></span>
        <span class="del" @click.stop="handleDel(route, i)" v-if="i">×</span>
      </div>
    </router-link>
    <div class="route-tab teleport" @dragover="dragover" v-show="showTeleport" @drop="drop">拖拽到此新增路由</div>
  </div>
</template>

<script>
export default {
  computed: {
    history() {
      return [
        {
          path: '/',
          title: '首页'
        },
        ...this.$store.state.history
      ]
    },
    showTeleport() {
      return !!this.$store.state.showTeleport
    }
  },
  methods: {
    async handleDel(route, i) {
      if (route.path === '/') return
      this.$store.commit('DEL_HISTORY', route)
      if (route.path === this.$route.path) this.activePrev(i - 1)
    },
    activePrev(i) {
      const route = this.history[i]
      if (route) this.$router.push(route.path)
    },
    dragover(event) {
      event.preventDefault()
    },
    drop(event) {
      event.preventDefault()
      this.$router.push('/newPage').then(() => {
        this.$store.state.showTeleport()
        this.$store.commit('SET_TELEPORT', false)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.tab-bar
{
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;
  .route-tab
  {
    background: #f5f5f5;
    border: 1px solid #ddd;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    &.teleport
    {
      border: 1px dashed #000;
      color: #000;
    }
    .del
    {
      position: absolute;
      right: 0;
      top: calc((100% - 8px) / 2);
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid rgb(219, 97, 97);
      color: rgb(219, 97, 97);
      font-size: 12px;
      text-align: center;
      line-height: 8px;
      opacity: 0;
      transition: all .5s ease-in-out;
      pointer-events: none;
    }
    &:hover
    {
      .del
      {
        opacity: 1;
        pointer-events: visible;
      }
    }
    &.active
    {
      color: #59c393;
    }
    & + .route-tab
    {
      margin-left: 5px;
    }
  }
}
</style>