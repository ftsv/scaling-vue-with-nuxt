<template lang="pug">
div(class="main-page-content")
    event-card(v-for="(event, index) in events" :key="index" :event="event" :data-index="index")

    
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (err) {
      error({
          statusCode: 503,
          message: 'Unable to fetch events at this time.'
        })
    }
  },
  head() {
    return {
      title: 'Event Listing'
    }
  },
  computed: mapState({
    events: state => state.events.events
  })
}
</script>

<style>
.main-page-content {
  background-color: aqua;
}
</style> 

import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
