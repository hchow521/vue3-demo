<template>
  <div class="container">
    <header>
      <img src="@/assets/logo.png" alt="" @click="toggleMenu">
    </header>
    <div class="gradient"></div>
    <!-- 不建议router-view包含在transition和keep-alive标签里面 -->
    <router-view v-slot="{ Component, route }">
      <transition-group name="toggle-nav" tag="div" class="flex">
        <nav-bar key="nav-bar" v-show="menuShow" />
        <div class="main" key="main">
          <tab-bar />
          <main>
            <transition name="router">
              <keep-alive exclude="redirect">
                <component :is="Component" :key="route.path" />
              </keep-alive>
            </transition>
          </main>
        </div>
      </transition-group>
    </router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import NavBar from './components/NavBar'
export default {
  components: {
    TabBar: defineAsyncComponent(() => import('./components/TabBar')),
    NavBar
  },
  computed: {
    menuShow() {
      return this.$store.state.menuShow
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('TOGGLE_MENU')
    }
  }
}
</script>

<style lang="less" scoped>
.container
{
  width: 100%;
  height: 100%;
  header
  {
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0 10px;
    align-items: center;
    // border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    img
    {
      max-height: 50px;
      cursor: pointer;
    }
  }
  .flex
  {
    display: flex;
    height: calc(100vh - 60px);
    padding-top: 5px;
    .main
    {
      flex: auto;
      height: 100%;
      overflow: hidden;
      
      main
      {
        width: 100%;
        height: calc(100% - 32px);
        position: relative;
      }
    }
  }
}
.gradient{
  height: 5px;
  background: linear-gradient(90deg, transparent 0%, #5CFBF8 44%, transparent 100%);
}
// 路由过渡动画
.router-enter-active, .router-leave-active
{
  transition: all .5s ease;
  position: absolute;
}
.router-enter-from, .router-leave-to
{
  opacity: 0;
}
.router-enter-to, .router-leave-from
{
  opacity: 1;
}
.toggle-nav-move
{
  transition: all .5s ease-in;
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body, #app
{
  width: 100vw;
  height: 100vh;
}
</style>
