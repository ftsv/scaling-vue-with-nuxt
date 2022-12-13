<template lang="pug">
nuxt-link(:to="`event/${event.id}`")
  div(class="-shadow")
    span(class="eyebrow") @{{ event.time}} on {{ parsedDate }}
    h4(class="title") {{ event.title }}
    span {{ event.attendees.length }} attending
</template>
<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    parsedDate() {
      const eventDate = new Date(this.event.date)
      return eventDate.toDateString()
    }
  }
}
</script>