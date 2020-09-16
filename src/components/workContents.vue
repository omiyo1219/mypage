<template>
  <v-app>
    <div>
      <transition name="textSlide">
        <span class="workTitleStyle" v-show="showData['showworkTitle']">
          Work
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showArrow']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <v-row class="mainBody" align="center" no-gutters>
    </v-row>
  </v-app>
</template>

<script>

export default {
  name: 'workContents',
  props: {
    height: {
      type: Number,
    }
  },
  data () {
    return {
      imageData: {
        arrowImage:require("@/assets/fullWidthArrow.svg"),
        profileImage: require("@/assets/myImage.svg"),
      },
      showData: {
        showArrow: false,
        showworkTitle: false
      }
    }
  },
  mounted() {
    setTimeout(this.slideArrow, 200);
    setTimeout(this.slideName, 1000);
  },
  methods: {
    slideArrow() {
      this.showData['showArrow'] = true;
    },
    slideName() {
      this.showData['showworkTitle'] = true;
    }
  }
}
</script>

<style scoped>

.workTitleStyle {
  position: absolute;
  right:0;
  font-size: 3.2vw;
  font-style: oblique;
  font-weight: 1000;
  color: #42AEEF;
  margin-right: 7%;
  letter-spacing: 5px;
}

.setArrowPos {
  position: absolute;
  z-index: 5;
  left:0;
  width:100%;
  margin-top: 2.5%;
}

.mainBody {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
  margin-top: 8%;
}

.slide-enter-active, .slide-leave-active {
  transition: transform .6s
}
.slide-enter {
  transform: translateX(-1000px)
}

.textSlide-enter-active, .textSlide-leave-active {
  transition: transform .28s
}
.textSlide-enter {
  transform: translateX(-150px)
}

</style>
