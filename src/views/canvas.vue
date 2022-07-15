<template>
  <div>
    <canvas></canvas>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      length: 0,
      add: true,
      animation: null,
      timer: 0
    }
  },
  created() {
    this.initCanvas()
  },
  methods: {
    initCanvas() {
      const canvas = this.$el?.querySelector('canvas')
      if (canvas) {
        canvas.width = 400
        canvas.height = 400
        this.canvas = canvas.getContext('2d')
        this.canvas.strokeStyle = '#999'
        console.log(this.canvas)
        this.animation = requestAnimationFrame(this.loop)
      } else {
        if (this.timer > 100) {
          alert('初始化canvas超时，请检查canvas是否存在')
        } else {
          this.timer++
          setTimeout(() => {
            this.initCanvas()
          }, 100)
        }
      }
    },
    loop() {
      this.canvas.fillStyle = '#f5f5f5';
      this.canvas.fillRect(0, 0, 400, 400);
      if (this.add) {
        this.length++
        if (this.length > 400) {
          this.length = 400
          this.add = false
        }
      } else {
        this.length--
        if (this.length < 0) {
          this.length = 0
          this.add = true
        }
      }
      this.canvas.beginPath();
      this.canvas.moveTo(0, 0)
      this.canvas.lineTo(this.length, this.length)
      this.canvas.stroke()
      this.animation = requestAnimationFrame(this.loop)
    },
    stop() {
      cancelAnimationFrame(this.animation)
      this.animation = null
    },
    toggle() {
      if (this.animation) {
        this.stop()
      } else {
        if (this.canvas) this.animation = requestAnimationFrame(this.loop)
      }
    }
  },
  activated() {
    if (!this.animation && this.canvas) {
      this.animation = requestAnimationFrame(this.loop)
    }
  },
  deactivated() {
    this.stop()
  }
  
}
</script>