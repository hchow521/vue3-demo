export default {
  data() {
    return {
      show: false,
      boxList: ['blue', 'yellow']
    }
  },
  methods: {
    add() {
      this.boxList.push('rgb('+ [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)].join(',') +')')
    },
    remove() {
      this.boxList.splice(this.boxList.length - 1, 1)
    },
    toggle() {
      this.show = !this.show
    }
  }
}