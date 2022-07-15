<template>
  <div>
    <h4>模拟苹果<a href="javascript:void(0)" @click="add">切入</a>/<a href="javascript:void(0)" @click="remove">切出</a></h4>
    <transition-group name="box">
      <div class="box" v-for="(box, i) in boxList" :key="i" v-text="i + 1" :style="'background:' + box"></div>
    </transition-group>
  </div>
</template>

<style lang="less" scoped>
  .box
  {
    position: absolute;
  }
  .box-leave-active, .box-enter-active
  {
    transition: all 1s ease-in-out;
  }
  .box-leave-to, .box-enter-from
  {
    transform: translateX(100px);
    opacity: 0;
  }
</style>