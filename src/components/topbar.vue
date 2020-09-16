<template>
  <v-app style="max-height:50px">
    <v-app-bar
      fixed
      dense
      color="#42AEEF"
      dark
      :elevation="8"
    >
      <v-row align="center">
        <v-toolbar-title class="hidden-sm-and-down ml-3">PORTFOLIO</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="3" sm="3" md="3" lg="3" xl="3">
            <v-btn class="topMenu" text>
              <span style="color:#FCF503">A</span>bout
            </v-btn>
          </v-col>
          <v-col cols="3" sm="3" md="3" lg="3" xl="3">
            <v-btn class="topMenu" text>
              <span style="color:#FCF503">W</span>ork
            </v-btn>
          </v-col>
          <v-col cols="3" sm="3" md="3" lg="3" xl="3">
            <v-btn class="topMenu" text>
              <span style="color:#FCF503">S</span>kill
            </v-btn>
          </v-col>
          <v-col cols="3" sm="3" md="3" lg="3" xl="3">
            <v-btn class="topMenu" text>
              <span style="color:#FCF503">C</span>ontact
            </v-btn>
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
.topMenu {
  font-size: 0.8em;
  font-weight: 900;
  font-style: oblique;
}

</style>
