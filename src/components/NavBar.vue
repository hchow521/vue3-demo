<template>
  <nav class="nav-bar">
    <router-link v-for="menu in mergeMenuList" :key="menu.path" :to="menu.path" v-text="menu.title || '无标题'" />
  </nav>
</template>

<script>
  import { isEqual } from 'lodash'
  import routes from '@/router/routes'
  export default {
    data() {
      return {
        menuList: routes.map(_ => Object.assign(_, {
          component: undefined,
          title: _.meta?.title
        })).filter(_ => !_.hide)
        // menuList: [
        //   {
        //     title: '首页',
        //     path: '/'
        //   },
        //   {
        //     title: '新特性provide',
        //     path: '/provide',
        //   },
        //   {
        //     title: '过渡动画transition',
        //     path: '/transition'
        //   },
        //   {
        //     title: '画布',
        //     path: '/canvas'
        //   }
        // ]
      }
    },
    computed: {
      mergeMenuList() {
        return [
          ...this.menuList,
          ...this.$store.state.pages
        ]
      }
    },
    created() {
      const {
        path,
        params,
        meta,
        name
      } = this.$route
      if (name !== 'diy') return
      const currentRoute = {
        title: params.title || meta.title,
        path
      }
      if (!this.mergeMenuList.some(page => isEqual(page, currentRoute))) {
        this.$store.commit('ADD_PAGE', currentRoute)
      }
    }
  }
</script>
<style lang="less" scoped>
.nav-bar
{
  height: 100%;
  margin-right: 10px;
  flex-shrink: 0;
  border-radius: 0 5px 5px 0;
  overflow-y: auto;
  box-shadow: 5px 5px 5px rgba(0,0,0,.25);
  & > a
  {
    display: block;
    text-decoration: none;
    white-space: nowrap;
    padding: 10px;
    color: #222;
    font-size: 14px;
    transition: color .5s ease-out;
    transition: background .5s ease-in;
    &.router-link-active
    {
      color: #59c393;
      background: #f5f5f5;
    }
  }
}

.toggle-nav-leave-active
{
  position: absolute;
}
.toggle-nav-enter-active,
.toggle-nav-leave-active
{
  transition: all .8s ease-out;
}

.toggle-nav-leave-to
{
  transform: translateX(calc(-100% - 5px));
}
.toggle-nav-enter-from
{
  transform: translate(calc(100% + 5px), -50px);
}
</style>