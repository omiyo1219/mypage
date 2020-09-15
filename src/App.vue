<template>
  <v-app>
    <div class="container">
      <topbar></topbar>
      <dropDownMatrix></dropDownMatrix>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import topbar from "./components/topbar"
import dropDownMatrix from "./components/dropdownMatrix"

export default {
  name: 'App',
  components: {
    topbar,
    dropDownMatrix
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  position: relative;
  z-index: 0;
}
</style>
