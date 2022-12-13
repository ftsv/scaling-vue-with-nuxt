<template lang="pug">
div
  span {{ event.title }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch (err) {
      error({
          statusCode: 503,
          message: `Unable to fetch event #${params.id}.`
        })
    }
  },
  head() {
    return {
      title: `${this.event?.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `What you need to know about ${this.event?.title}`
        }
      ]
    }
  },
  computed: mapState({
    event: state => state.events.event
  })
}
</script>

import Vue from 'vue'

export default Vue.extend({
  name: 'EventProfilePage'
})