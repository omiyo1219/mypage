<template>
  <v-app style="max-height:40px">
    <v-app-bar
      fixed
      color="#fcb69f"
      dark
      :elevation="8"
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,0.9)"
        ></v-img>
      </template>
      <v-row align="center">
        <v-toolbar-title class="hidden-sm-and-down ml-3">Profile</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="3" sm="2" md="3" lg="3" xl="3">
            <v-btn text>About</v-btn>
          </v-col>
          <v-col cols="3" sm="2" md="3" lg="3" xl="3">
            <v-btn text>Skill</v-btn>
          </v-col>
          <v-col cols="3" sm="2" md="3" lg="3" xl="3">
            <v-btn text>Work</v-btn>
          </v-col>
          <v-col cols="3" sm="2" md="3" lg="3" xl="3">
            <v-btn text>Contact</v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.topbarBtn:hover {
  background-color:#00ff00;
}

</style>
