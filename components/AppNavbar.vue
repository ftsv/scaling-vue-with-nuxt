<template lang="pug">
  navbar(class="navbar")
    ul(class="navbar-list")
        li(class="navbar-list-item" v-for="(item, index) in nav" :key="index")
          nuxt-link(:to="item.link") {{ item.title }}
        </li>
    button Menu
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const nav = ref([
      { link: '/', title: "Main"},
      { link: '/create', title: "Events"},
    ])
    return {
      nav
    }
  }
}
</script>

<style>
  .navbar {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-list {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  .navbar-list-item {
    list-style: none;
  }
</style>