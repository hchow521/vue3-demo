<template>
  <div class="flex-view">
    <component v-for="(key, i) in components" :is="key" :key="i" class="flex-item" />
  </div>
</template>

<script>
import mixin from './mixin'
// 引入当前文件夹下名字包含transition*.vue的文件
const files = require.context('./', true, /transition+\d*\.vue$/)
const components = {}
files.keys().map(key => {
  // 增加混入代码
  files(key).default.mixins = [mixin]
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
export default {
  components: {
    ...components
  },
  data() {
    return {
      components: Object.keys(components)
    }
  }
}
</script>
<style lang="less" scoped>
.flex-view
{
  padding: 20px;
  display: flex;

  .flex-item
  {
    min-width: 200px;
    ::v-deep
    {
      .box
      {
        display: inline-block;
        width: 100px;
        height: 100px;
        background: blue;
        &.box1
        {
          background: yellow;
        }
      }
    }
  }
}
</style>