<template>
  <v-app>
    <topbar></topbar>  <!--topbarメニュー-->
    <dropDownMatrix></dropDownMatrix>  <!--背景エフェクト-->
    <v-main>
      <router-view/>
    </v-main>
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
  font-family: 'Helvetica Neue', Helvetica, Arial, "Hiragino Kaku Gothic ProN", sans-serif,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
