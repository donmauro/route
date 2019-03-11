<template>

  <div>
    <h1>{{ customerName }}</h1>
    <Menu></Menu>
  <router-view></router-view>
  <router-view name="b"></router-view>
  </div>
</template>

<script>
import Menu from './views/Menu.vue'
import 'semantic-ui-css/semantic.css'

export default {
  name: "App",
  components: {
    Menu,
  },
  computed: {
    customerName() {
      return this.$store.state.customerName
    }
  }
    
};
</script>

<style>
  body {
    padding: 2em;
  }
</style>
