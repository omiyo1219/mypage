<template>
  <v-app class="contents">
    <div id="aboutObserver">
      <transition name="textSlide">
        <span v-show="showData['showAboutTitle']" class="aboutTitleStyle">
          About
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showAboutTitle']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <v-row class="mainBody" align="center" no-gutters>
      <v-col
        cols="12"
        sm="12"
        md="5"
        lg="5"
        xl="5"
        class="ml-3 mr-3"
      >
        <v-img
          :src="imageData['profileImage']"
          :eager="true"
          width="95%"
          height="95%"
        ></v-img>
      </v-col>
      <v-col
        cols="1"
        sm="12"
        md="1"
        lg="1"
        xl="1"
      ></v-col>
      <v-col
        cols="12"
        sm="12"
        md="5"
        lg="5"
        xl="5"
        style="font-size:1.3em;"
      >
        <span>
          <br>
          岡田　尋嗣<br><br>
          1997年5月6日生まれ、仙台高等専門学校名取キャンパス機械システム工学科卒。<br>
          航空宇宙業界から転身し、2019年からフロントエンジニアとしてキャリアスタート。<br>
          現在は、中規模Webアプリケーション開発、UIデザイン及びコンポーネント制作を手掛ける。<br>
        </span>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

export default {
  name: 'aboutContents',
  data () {
    return {
      imageData: {
        arrowImage:require("@/assets/arrows/fullWidthArrow.svg"),
        profileImage: require("@/assets/about/myImage.jpg"),
      },
      showData: {
        showAboutTitle: true,
        showImage: false,
      }
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px 0px -5%",
      threshold: 0
    }

    const target = document.getElementById('aboutObserver');
    this.onIntersect(target, options);
  },
  methods: {
    showImages() {
      if(this.showData['showAboutTitle']) {
        this.showData['showAboutTitle'] = false;
      } else {
        this.showData['showAboutTitle'] = true;
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

.aboutTitleStyle {
  position: absolute;
  right:0;
  font-size: 3.2vw;
  font-style: oblique;
  font-weight: 1000;
  color: #b04df2;
  margin-right: 7%;
  letter-spacing: 5px;
}

.setArrowPos {
  position: absolute;
  left:0;
  width:100%;
  margin-top: 2.5%;
}

.mainBody {
  position: relative;
  width: 100%;
  height: 100%;
  color: gray;
  z-index: 1;
  margin-top: 8%;
  margin-bottom: 8%;
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
