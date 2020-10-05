<template>
  <div class="topContents">
    <transition name="fade">
      <span v-show="showData['showName']">
        HIROTSUGU OK<span style="color:#FCF503">A</span>DA
      </span>
    </transition>
    <!--<transition name="slide">
      <img v-show="showData['showArrow']" class="setArrowPos" :src="arrowImage">
    </transition>--><br>
    <transition name="fade">
      <span v-show="showData['showName']">
        <span class="roleTitle">FRONTEND ENGINEER</span>
      </span>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'topContents',
  data () {
    return {
      arrowImage:require("@/assets/fullWidthArrow.svg"),
      showData: {
        showArrow: false,
        showName: false
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
      this.showData['showName'] = true;
    }
  }
}
</script>

<style scoped>
.topContents {
  position: relative;
  background-color: rgb(0,0,0,0);
  height: 85px;
  font-size: 3.2vw;
  font-weight: 500;
  color: #42AEEF;
  letter-spacing: 10px;
  z-index: 1;
  text-align: center;
}
.setArrowPos {
  position: absolute;
  z-index: 0;
  left:0;
  width:100%;
  margin-top: 2.5%;
}
.roleTitle {
  color: #ccc;
  letter-spacing: 5px;
  font-size: 1.2vw;
}

.fade-enter-active, .fade-leave-active {
  will-change: opacity;
  transition: opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.slide-enter-active, .slide-leave-active {
  transition: transform .6s
}
.slide-enter {
  transform: translateX(-1000px)
}

</style>
