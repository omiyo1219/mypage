<template>
  <transition name="fade">
    <v-app v-show="showData['page']" class="contents">
        <v-row align="center" justify="center" class="successText">
          <div>
            Thank you for <span style="color:#FCF503">y</span>our E-mail !!<br>
            <v-row align="center" no-gutters>
              <v-col cols="11">
                <div style="width:100%; height:15px; background-color:#fff"></div>
              </v-col>
              <v-col cols="1" class="pl-1" style="font-size:1.2vw">
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
