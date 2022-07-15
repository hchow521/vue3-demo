<template>
  <div>
    <h4><a href="javascript:void(0)" @click.prevent="toggle">3d旋转</a></h4>
    <transition class="box" name="box">
      <div class="box1" v-if="show" @click="toggle" key="box1">1111</div>
      <div class="box2" v-else @click="toggle" key="box2">22222</div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
  .box
  {
    position: absolute;
    backface-visibility:hidden;
    &:nth-child(2)
    {
      z-index: 1;
    }
  }
  .box-enter-active, .box-leave-active
  {
    transition: all 2s ease-out;
  }
  .box-enter-from
  {
    // opacity: 0;
    transform: rotate3d(0, 1, 0, -180deg);
  }
  .box-enter-to
  {
    opacity: 1;
  }
  .box-leave-from
  {
    opacity: 1
  }
  .box-leave-to
  {
    // opacity: 0;
    transform: rotate3d(0, 1, 0, 180deg);
  }
</style>