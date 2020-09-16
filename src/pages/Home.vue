<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
      :style="{height:screenSize['topContentsHeight'] + 'px'}"
    >
      <v-col cols="12">
        <topContents></topContents>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col cols="12">
        <aboutContents :height="screenSize['otherContentsHeight']"></aboutContents>
      </v-col>
    </v-row>
    
    <v-row
      justify="center"
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
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    console.log(screen.height)
    this.screenSize['topContentsHeight'] = screen.height - 200
  },
  beforeDestroy: function(){
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.screenSize['topContentsHeight'] = screen.height - 200
    }
  }
}
</script>

<style scoped>
.contentsStyle {
  position: relative;
}
</style>
