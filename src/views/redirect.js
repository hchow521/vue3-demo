export default {
  name: 'redirect',
  created () {
    this.$router.replace(this.$route.params.name)
  }
}