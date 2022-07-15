<template>
  <msg-component v-model="value"></msg-component>
</template>

<script>
import MsgComponent from '@/components/MsgComponent.js'
export default {
  components: { MsgComponent },
  data() {
    return {
      value: ''
    }
  }
}
</script>