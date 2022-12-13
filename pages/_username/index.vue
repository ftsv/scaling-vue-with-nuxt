<template lang="pug">
  div Username {{ username }}
</template>


<script>
export default {
  head() {
    return {
      title: `User ${this.username}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `What you need to know about user ${this.id}`
        }
      ]
    }
  }, 
  computed: {
    username() {
      return this.$route.params.username
    }
  }
}
</script>

import Vue from 'vue'

export default Vue.extend({
  name: 'UserPersonalPage'
})