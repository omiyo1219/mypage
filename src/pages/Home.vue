<template>
<v-app class="contents">
  <transition name="fadeEffects">
    <firstArrowEffect v-if="showFirstEffects" v-model="showFirstEffects"></firstArrowEffect>
  </transition>

  <dropDownMatrix v-if="showPortfolio"></dropDownMatrix>  <!--背景エフェクト-->

  <transition name="fadeEffects">
    <div v-show="showPortfolio">
      <v-app-bar
        id="top"
        fixed
        color="#0092F0"
        dark
        :elevation="8"
        style="position:relative; z-index:100;"
      >
        <v-row align="center">
          <v-toolbar-title class="ml-3">PORTFOLIO</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-row class="hidden-sm-and-down">
            <v-col cols="3" sm="2" md="3" lg="3" xl="3">
              <v-btn class="topMenu" text v-scroll-to="'#about'">
                <span style="color:#FCF503">A</span>bout
              </v-btn>
            </v-col>
            <v-col cols="3" sm="2" md="3" lg="3" xl="3">
              <v-btn class="topMenu" text v-scroll-to="'#work'">
                <span style="color:#FCF503">W</span>ork
              </v-btn>
            </v-col>
            <v-col cols="3" sm="2" md="3" lg="3" xl="3">
              <v-btn class="topMenu" text v-scroll-to="'#skill'">
                <span style="color:#FCF503">S</span>kill
              </v-btn>
            </v-col>
            <v-col cols="3" sm="2" md="3" lg="3" xl="3">
              <v-btn class="topMenu" text v-scroll-to="'#contact'">
                <span style="color:#FCF503">C</span>ontact
              </v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-app-bar>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
          :style="{height:screenSize['topContentsHeight'] + 'px'}"
        >
          <v-col cols="12">
            <topContents v-model="showPortfolio"></topContents>
          </v-col>
          <transition name="fade">
            <div v-show="pageScroll['scrollY'] == 0" class="announceScrollMove hidden-sm-and-down">
              <v-img
                class="announceScrollHover"
                v-scroll-to="'#about'"
                :src="imageData['announceScroll']"
                width="100"
                height="150"
              >
              </v-img>
            </div>
          </transition>
        </v-row>
        <transition name="bottomSlide">
          <div 
            class="moveTopStyle hidden-sm-and-down"
            v-show="pageScroll['scrollY'] > 300"
            @mouseover="hoverImage(true)"
            @mouseleave="hoverImage(false)"
            v-scroll-to="'#top'"
          >
            <v-img
              :src="imageData['moveTop']"
              width="120"
              height="75"
            >
            </v-img>
          </div>
        </transition>
        <div style="margin-top:10%">
          <aboutContents id="about"></aboutContents>
          <workContents id="work"></workContents>
          <skillContents id="skill"></skillContents>
          <contactContents id="contact"></contactContents>
        </div>
      </v-container>
    </div>
  </transition>
</v-app>
</template>

<script>
import firstArrowEffect from "../components/effects/firstArrowEffect"
import dropDownMatrix from "../components/effects/dropdownMatrix"
import topContents from "../components/topContents"
import aboutContents from "../components/aboutContents"
import workContents from "../components/workContents"
import skillContents from "../components/skillContents"
import contactContents from "../components/contactContents"

export default {
  name: 'home',
  components: {
    firstArrowEffect,
    dropDownMatrix,
    topContents,
    aboutContents,
    workContents,
    skillContents,
    contactContents,
  },
  data () {
    return {
      showFirstEffects: true,
      showPortfolio: false,
      aa: false,
      imageData: {
        moveTop: require("@/assets/pageTopIcon.svg"),
        announceScroll: require("@/assets/announceScroll.svg"),
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
  watch: {
    showFirstEffects() {
      setTimeout(() => {
        this.showPortfolio = true
      },1000)
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.screenSize['topContentsHeight'] = screen.height * 0.7;
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenSize['topContentsHeight'] = screen.height * 0.7;
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
    hoverImage(bool) {
      if(bool) {
        this.imageData['moveTop'] = require("@/assets/pageTopIconHover.svg");
      } else {
        this.imageData['moveTop'] = require("@/assets/pageTopIcon.svg");
      }
    },
  }
}
</script>

<style scoped>
.contents {
  position: relative;
  background-color: rgb(0,0,0,0);
}

.topMenu {
  font-size: 0.8em;
  font-weight: 1000;
  font-style: oblique;
}

.moveTopStyle {
  cursor: pointer;
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 0;
}

.announceScrollMove {
  position: fixed;
  z-index: 999;
  bottom: 0;
  animation-name: floatVartical;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.5s;
}

@keyframes floatVartical {
  0% {
    transform: translate(0,0px);
  }

  100% {
    transform: translate(0,-25px);
  }
}

.announceScrollHover {
  cursor: pointer;
  transition: .8s ;
	transform: rotateY( 0deg );
}

.announceScrollHover:hover {
  transform: rotateY( 360deg );
}

.fade-enter-active, .fade-leave-active {
  will-change: opacity;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

.fadeEffects-enter-active, .fadeEffects-leave-active {
  will-change: opacity;
  transition: opacity 1000ms;
}

.fadeEffects-enter, .fadeEffects-leave-to {
  opacity: 0
}

.bottomSlide-enter-active, .bottomSlide-leave-active {
  transition: all 0.5s ease 0s;
}

.bottomSlide-enter,.bottomSlide-leave-to {
  opacity: 0;
}

.bottomSlide-enter, .bottomSlide-leave-to{
  transform: translateY(60px);
}

.bottomSlide-enter-to,.bottomSlide-leave {
  transform: translateY(0);
}
</style>
