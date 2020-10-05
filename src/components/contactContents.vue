<template>
  <v-app class="contents" v-show="showData['showContents']">
    <div>
      <transition name="textSlide">
        <span class="skillTitleStyle" v-show="showData['showcontactTitle']">
          Contact
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showArrow']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <v-row class="mainBody" justify="center" align="center" no-gutters>
      <v-btn
        @click="openMailer"
        class="ma-2 mailIconStyle"
        outlined
        fab
      >
        <v-icon
          large
        >
          mdi-email
        </v-icon>
      </v-btn>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'skillContents',
  data () {
    return {
      imageData: {
        arrowImage: require("@/assets/fullWidthArrow.svg"),
      },
      showData: {
        showContents: false,
        showArrow: false,
        showcontactTitle: false,
        showImage: true,
      },
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    slideArrow() {
      this.showData['showArrow'] = true;
    },
    slideName() {
      this.showData['showcontactTitle'] = true;
    },
    openMailer() {
      var mail = "m.kyogetsu@gmail.com"
      var title = "お問い合わせ"
      window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=m.kyogetsu@gmail.com&su=お問い合わせ")
    },
    handleScroll() {
      if(window.scrollY > 1910) {
        this.showData['showContents'] = true;
        this.showData['showArrow'] = true;
        this.showData['showcontactTitle'] = true;

      } else {
        this.showData['showContents'] = false;
        this.showData['showArrow'] = false;
        this.showData['showcontactTitle'] = false;
      }
    },
  }
}
</script>

<style scoped>
.contents {
  background-color: rgb(0,0,0,0);
}


.skillTitleStyle {
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
  z-index: 0;
  left:0;
  width:100%;
  margin-top: 2.5%;
}

.mainBody {
  position: relative;
  width: 100%;
  height: 100%;
  color: gray;
  z-index: 5;
}

.mailIconStyle {
  color: #42AEEF;
  transform: scale(4.5, 4.5);
  transition-duration: 0.3s;
}

.mailIconStyle:hover {
  opacity: 0.7;
  color: #fff;
  background-color: #42AEEF;
  transition-duration: 0.3s;
}



.btnCircle:hover {
  background: #42AEEF;
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
