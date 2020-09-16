<template>
  <v-app style="background-color: rgb(0,0,0,0);">
    <div>
      <transition name="textSlide">
        <span class="aboutTitleStyle" v-show="showData['showAboutTitle']">
          About
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showArrow']" class="setArrowPos" :src="imageData['arrowImage']">
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
        style="font-size:1.9em; color:gray;"
      >
        <span>
          <br>
          岡田　尋嗣<br><br>
          1997年5月6日生まれ、仙台高等専門学校名取キャンパス機械システム工学科卒。株式会社オーパス所属。<br>
          航空宇宙業界から転身し、2019年からフロントエンジニアとしてキャリアスタート。<br>
          現在は、中規模Webアプリケーション開発、UIデザイン及びコンポーネント制作を手掛ける。<br>
          20代前半という研鑽の時期を日々精進中。
        </span>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

export default {
  name: 'aboutContents',
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
.aboutTitleStyle {
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
  left:0;
  width:100%;
  margin-top: 2.5%;
}

.mainBody {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
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
