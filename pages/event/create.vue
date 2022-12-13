<template lang="pug">
  div Create Event
</template>

<script>
export default {
  head() {
    return {
      title: 'Create Event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Create event content'
        }
      ]
    }
  }
}
</script>

import Vue from 'vue'

export default Vue.extend({
  name: 'EventCreatePage'
})
