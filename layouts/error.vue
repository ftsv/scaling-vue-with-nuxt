<template lang="pug">
  div
    p(v-if="statusCode === 404")
      nuxt-link(to="/") Return to homepage
    p(v-else) {{ error.message }} 
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    },
  },
  head() {
    return {
      title: this.message
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    }
  }
}
</script>