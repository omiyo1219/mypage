<template>
  <div  class="workContents">
    <transition name="textSlide">
      <div class="workTitleStyle" v-show="showData['showAboutTitle']">
        About
      </div>
    </transition>
    <transition name="slide">
      <img v-show="showData['showArrow']" class="setArrowPos" :src="imageData['arrowImage']">
    </transition><br>
  </div>
</template>

<script>

export default {
  name: 'aboutContents',
  data () {
    return {
      imageData: {
        arrowImage:require("@/assets/fullWidthArrow.svg"),
      },
      showData: {
        showArrow: false,
        showAboutTitle: false
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
      this.showData['showAboutTitle'] = true;
    }
  }
}
</script>

<style scoped>
.workContents {
  height: 85px;
}

.workTitleStyle {
  float: right;
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
  opacity: 0;
  transform: translateX(-150px)
}

</style>
