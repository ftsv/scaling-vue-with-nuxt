<template lang="pug">
div(class="main-page-content")
    event-card(v-for="(event, index) in events" :key="index" :event="event" :data-index="index")

    
</template>

<script>
export default {
  asyncData({ $axios, error }) {
    return $axios.get('http://localhost:3000/events')
      .then( res => {
        return {
          events: res.data
        }
      })
      .catch(e => {
        error({
          statusCode: 503,
          message: 'Unable to fetch events at this time.'
        })
      })
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
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
