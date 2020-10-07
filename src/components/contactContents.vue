<template>
  <v-app class="contents">
    <div id="contactObserver">
      <transition name="textSlide">
        <span class="skillTitleStyle" v-show="showData['showContactTitle']">
          Contact
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showContactTitle']" class="setArrowPos" :src="imageData['arrowImage']">
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
  name: 'contactContents',
  data () {
    return {
      imageData: {
        arrowImage: require("@/assets/fullWidthArrow.svg"),
      },
      showData: {
        showContactTitle: true,
        showImage: false,
      },
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px 0px -5%",
      threshold: 0
    };

    const target = document.getElementById('contactObserver');
    this.onIntersect(target, options);
  },
  methods: {
    openMailer() {
      var mail = "m.kyogetsu@gmail.com"
      var title = "お問い合わせ"
      window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=m.kyogetsu@gmail.com&su=お問い合わせ")
    },
    showImages() {
      if(this.showData['showContactTitle']) {
        this.showData['showContactTitle'] = false;
      } else {
        this.showData['showContactTitle'] = true;
        this.showData['showImage'] = true;
      }
    },
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.slideImages, options);
      observer.observe(target);
    },
    slideImages() {
      this.showImages();
    }
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
  transition: all .6s ease 0s;
  transition-delay:.7s;
}

.textSlide-enter,.textSlide-leave-to {
  opacity: 0;
}

.textSlide-enter {
  transform: translateX(-150px);
}

.textSlide-enter-to {
  transform: translateX(0);
}

</style>
