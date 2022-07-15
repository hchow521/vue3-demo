import { h, defineAsyncComponent } from 'vue'
export default {
  name: 'MsgComponent',
  inject: ['msg', 'updateMsg'],
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    submit(value) {
      if (!value) return alert('输入值不能为空！')
      // 只读无法修改，需要调用父组件provided的updateMsg方法
      // this.msg.value = value
      this.updateMsg(value)
    },
  },
  render() {
    return [
      h(
        defineAsyncComponent(() => import('./Title')),
        {
          level: 1
        },
        () => this.msg
      ),
      // 插入到#app
      h(
        // Teleport,
        'div',
        {
          to: '#app'
        },
        [
          h(
            'input',
            {
              value: this.$props.modelValue,
              placeholder: '请点击确定按钮修改',
              onInput: el => {
                const value = el.target.value
                this.$emit('update:modelValue', value)
              },
              onKeyup: el => {
                const value = el.target.value
                this.submit(value)
              }
            }
          ),
          h(
            'button',
            {
              class: 'btn',
              disabled: !this.$props.modelValue,
              onClick: () => {
                const value = this.$props.modelValue
                this.submit(value)
              }
            },
            '确定'
          )
        ]
      )
    ]
  }
}