// 函数式组件
import { h } from 'vue'
export default {
  name: 'Title',
  render() {
    return h(
      'h' + this.level,
      {}, // prop 或 attribute
      this.$slots.default() // 包含其子节点的数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}