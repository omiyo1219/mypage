<template>
<v-app class="contents">
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
    <div class="mt-4">
      <aboutContents></aboutContents>
      <workContents></workContents>
      <skillContents></skillContents>
    </div>
    
    
  </v-container>
</v-app>
</template>

<script>
import topContents from "../components/topContents"
import aboutContents from "../components/aboutContents"
import workContents from "../components/workContents"
import skillContents from "../components/skillContents"
import contactContents from "../components/contactContents"

export default {
  name: 'Home',
  components: {
    topContents,
    aboutContents,
    workContents,
    skillContents,
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
.contents {
  background-color: rgb(0,0,0,0);
}
</style>
