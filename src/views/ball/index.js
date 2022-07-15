
import { onActivated, onDeactivated, onMounted, ref, h } from 'vue'
let context = null, width, height, animation;
const canvas = ref(null), balls = []

function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

function randomColor() {
  return `rgba(${[random(0, 255),random(0, 255),random(0, 255)].join(',')})`
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
  this.updated = false;
}
Ball.prototype.draw = function() {
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  context.fill();
}
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
Ball.prototype.checkCollision = function() {
  let updated = false
  for (const ball of balls) {
    if (ball !== this) {
      const x = this.x - ball.x
      const y = this.y - ball.y
      const distance = Math.sqrt(x * x + y * y)
      if (distance < this.size + ball.size) {
        updated = true
        if (!this.updated) {
          this.color = randomColor()
        }
      }
    }
  }
  this.updated = updated
}
export default {
  setup() {
    onMounted(() => {
      const el = canvas.value
      const parent = el.parentNode
      height = el.height = parent.clientHeight
      width = el.width = parent.clientWidth
      context = el.getContext('2d')
      while (balls.length < 25) {
        let size = random(10, 20);
        let ball = new Ball(
          // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
          random(0 + size, width - size),
          random(0 + size, height - size),
          random(-7, 7),
          random(-7, 7),
          randomColor(),
          size
        );
        balls.push(ball);
      }
      animation = requestAnimationFrame(loop)
    })
    onActivated(() => {
      if (context && !animation) animation = requestAnimationFrame(loop)
    })
    onDeactivated(() => {
      cancelAnimationFrame(animation)
      animation = null
    })
  },
  render() {
    return h(
      'div',
      {
        style: 'width: 100%;height: 100%;'
      },
      [
        h(
          'canvas',
          {
            ref: canvas
          }
        ),
        h(
          'button',
          {
            style: 'position:absolute;top:0;left:0;',
            onClick: toggle
          },
          '暂停/启动'
        )
      ]
    )
  }
}
// 循环
function loop() {
  context.fillStyle = 'rgba(0, 0, 0, 0.25)';
  context.fillRect(0, 0, width, height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].checkCollision();
  }
  animation = requestAnimationFrame(loop);
}

// 暂停/启动
function toggle() {
  if (animation) {
    cancelAnimationFrame(animation)
    animation = null
  } else {
    if (context) animation = requestAnimationFrame(loop)
  }
}