<template lang="pug">
  div Event index
</template>


<script>
export default {
  head() {
    return {
      title: `Event #${this.id}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `What you need to know about event #${this.id}`
        }
      ]
    }
  }, 
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

import Vue from 'vue'

export default Vue.extend({
  name: 'EventProfilePage'
})