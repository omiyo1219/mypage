<template>
  <transition name="fade">
    <v-app v-show="showData['page']" class="contents" style="background-color:#00ff00">
        <v-row align="center" justify="center" class="successText">
          <v-row no-gutters>
            <v-col cols="12">
              Thank you for <span style="color:#FCF503">y</span>our E-mail !!
            </v-col>
            <v-col cols="9">
              <img
                :src="arrowImage"
                class="redirectArrow"
              >
            </v-col>
            <v-col cols="3" align-self="center" style="text-align:left; font-size:1.5vw;">
              <span :style="{color:redirectTextColor}">redirect</span>
            </v-col>
            </v-row>
          </v-row>
        </v-row>
    </v-app>
  </transition>
</template>

<script>

export default {
  name: 'successs',
  data () {
    return {
      arrowImage: require("@/assets/arrows/largeArrowLeft_white.svg"),
      redirectTextColor: "#fff",
      showData: {
        page: false,
      }
    }
  },
  mounted() {
    this.showData['page'] = true

    var el = document.querySelector('.redirectArrow');
    el.addEventListener("animationend", () => {
      this.redirectTextColor = "#FCF503";
      setTimeout(() => {
        this.$router.push('/');
      },500);
    });
  },
  methods: {
   
  }
}
</script>

<style scoped>
.contents {
  position: relative;
  background-color: #0092F0;
  width: 100%;
  height: 100%;
}

.successText {
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 6vh;
  font-weight: 600;
}
.redirectArrow {
  transform: scaleY(0.3);
  animation: SlideInArrow;
  animation-duration: 7.0s;
}

@keyframes SlideInArrow {
  0% {
    transform: scaleY(0.3) translateX(-100%);
  }
  100% {
    transform: scaleY(0.3) translateX(0);
  }
}

.fade-enter-active, .fade-leave-active {
  will-change: opacity;
  transition: opacity 1500ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
