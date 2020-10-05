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
    <transition name="bottom">
      <div 
        class="moveTopStyle hidden-sm-and-down"
        v-show="pageScroll['scrollY'] > 300"
        @mouseover="hoverImage(true)"
        @mouseleave="hoverImage(false)"
        @click="toTop"
      >
        <v-img
          :src="imageData['moveTop']"
          width="120"
          height="75"
        >
        </v-img>
      </div>
    </transition>
    <div style="margin-top:10%" v-cloak>
      <aboutContents></aboutContents>
      <workContents></workContents>
      <skillContents></skillContents>
      <contactContents></contactContents>
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
      imageData: {
        moveTop: require("@/assets/pageTopIcon.svg"),
      },
      screenSize: {
        topContentsHeight: null,
      },
      pageScroll: {
        scTimer: 0,
        scrollY: 0,
      },
      
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.screenSize['topContentsHeight'] = screen.height - 200;
  },
  beforeDestroy: function(){
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenSize['topContentsHeight'] = screen.height - 200;
    },
    handleScroll: function () {
      if (this.pageScroll['scTimer']) {
        return;
      }

      this.pageScroll['scTimer'] = setTimeout(() => {
        this.pageScroll['scrollY'] = window.scrollY;
        clearTimeout(this.pageScroll['scTimer']);
        this.pageScroll['scTimer'] = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    hoverImage(bool) {
      if(bool) {
        this.imageData['moveTop'] = require("@/assets/pageTopIconHover.svg");
      } else {
        this.imageData['moveTop'] = require("@/assets/pageTopIcon.svg");
      }
      
    }
  }
}
</script>

<style scoped>
.contents {
  position: relative;
  background-color: rgb(0,0,0,0);
}

.moveTopStyle {
  cursor: pointer;
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 0;
}

.bottom-enter-active, .bottom-leave-active {
  transition: all 0.5s ease 0s;
}

.bottom-enter,.bottom-leave-to {
  opacity: 0;
}

.bottom-enter, .bottom-leave-to{
  transform: translateY(60px);
}

.bottom-enter-to,.bottom-leave {
  transform: translateY(0);
}
</style>
