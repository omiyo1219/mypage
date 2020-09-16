<template>
  <v-container fluid>
    <v-row
      class="topContentsStyle"
      align="center"
      justify="center"
      :style="{height:screenSize['topContentsHeight'] + 'px'}"
    >
      <v-col cols="12">
        <topContents></topContents>
      </v-col>
    </v-row>
    <v-row
      class="topContentsStyle"
      justify="center"
    >
      <v-col cols="12">
        <aboutContents :height="screenSize['otherContentsHeight']"></aboutContents>
      </v-col>
    </v-row>
    <v-row
      class="topContentsStyle"
      justify="center"
      :style="{height:screenSize['otherContentsHeight'] + 'px'}"
    >
      <v-col cols="12">
        <workContents></workContents>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import topContents from "../components/topContents"
import aboutContents from "../components/aboutContents"
import workContents from "../components/workContents"
import contactContents from "../components/contactContents"

export default {
  name: 'Home',
  components: {
    topContents,
    aboutContents,
    workContents,
    contactContents,
  },
  data () {
    return {
      screenSize: {
        topContentsHeight: null,
        otherContentsHeight:null,
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    console.log(screen.height)
    this.screenSize['topContentsHeight'] = screen.height - 200
    this.screenSize['otherContentsHeight'] = screen.height - 150
  },
  beforeDestroy: function(){
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.screenSize['topContentsHeight'] = screen.height - 200
      this.screenSize['otherContentsHeight'] = screen.height - 150
    }
  }
}
</script>

<style scoped>

</style>
