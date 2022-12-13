<template lang="pug">
div
  span DEFAULT LAYOUT
  header
    app-navbar
  main
    nuxt
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Real World Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Where you can find all the events taking place in your neighbourhood'
        }
      ]
    }
  }
}
</script>