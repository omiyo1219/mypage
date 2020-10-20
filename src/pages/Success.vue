<template>
  <transition name="fade">
    <v-app v-show="showData['page']" class="contents">
        <v-row align="center" justify="center" class="successText">
          <div>
            Thank you for <span style="color:#FCF503">y</span>our E-mail !!<br>
            <v-row class="mt-3" style="text-align:left; font-size:1.2vw">
              <v-col cols="10">
                <svg width="100%" height="100">
                  <path d="M50 0 L100 25 L0 25 L0 80 L0 0 L0 20 L50 20 Z" style="fill:#F00"/>
                </svg>
                <!--
                <img
                  :src="arrowImage"
                  width="100%"
                  height="15px"
                  style="text-align:left"
                ></img>-->
              </v-col>
              <v-col cols="2">
                redirect
              </v-col>
            </v-row>
          </div>
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
      showData: {
        page: false
      }
    }
  },
  computed: {

  },
  mounted() {
    this.showData['page'] = true
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

.fade-enter-active, .fade-leave-active {
  will-change: opacity;
  transition: opacity 1500ms;
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
