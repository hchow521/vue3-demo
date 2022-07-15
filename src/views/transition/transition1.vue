<template>
  <div>
    <h4><a href="javascript:void(0)" @click="next">右淡入</a>/<a href="javascript:void(0)" @click="prev">左淡出</a></h4>
    <transition-group :name="transitionName">
      <div v-for="(box, i) in boxList" :key="i" class="box" v-text="i + 1" :style="'background:' + box" v-show="i === boxList.length - 1"></div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: ''
    }
  },
  methods: {
    next() {
      this.add()
      this.transitionName = 'add'
    },
    prev() {
      this.remove()
      this.transitionName = 'remove'
    },
  }
}
</script>

<style lang="less" scoped>
  .box
  {
    position: absolute;
  }
  .add-leave-active, .add-enter-active, .remove-leave-active, .remove-enter-active
  {
    transition: all 1s ease-in-out;
  }
  .remove-enter-from, .add-leave-to
  {
    opacity: 0;
    transform: translateX(-100px)
  }
  .remove-enter-to, .remove-leave-from, .add-leave-from, .add-enter-to
  {
    opacity: 1;
  }
  .remove-leave-to, .add-enter-from
  {
    opacity: 0;
    transform: translateX(100px)
  }
</style>