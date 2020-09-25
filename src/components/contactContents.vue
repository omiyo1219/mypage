<template>
  <v-app class="contents">
    <v-row justify="center">
      <span class="contactTitleStyle">
        ー Contact ー
      </span>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'contactContents',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.contents {
  background-color: rgb(0,0,0,0);
}

.contactTitleStyle {
  position: absolute;
  font-size: 3.2vw;
  font-style: oblique;
  font-weight: 1000;
  color: #42AEEF;
  letter-spacing: 5px;
}
</style>
