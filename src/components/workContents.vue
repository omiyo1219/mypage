<template>
  <v-app  class="contents">
    <div id="workObserver">
      <transition name="textSlide">
        <span class="workTitleStyle" v-show="showData['showWorkTitle']">
          Work
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showWorkTitle']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <v-row class="mainBody" no-gutters dense>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-img
          class="imageRotate mt-4"
          :eager="true"
          :src="imageData['workCenterImage']"
        ></v-img>
        <div style="margin-top:5%;">
          <div style="text-align:center; color:#0092F0; font-size:1.4em;">
            － 中規模Web開発 / UIコンポーネント開発 －
          </div><br>
          <div style="width:85%; margin:auto; font-size:1.3em;">
            業務管理システムの主にフロント実装。Vue.jsにて開発。
            UIフレームワークはBootstrapVueを使用。<br>
            主にhtml/cssのコーディングを担当。<br>
            また、UIのデザイン、およびUIコンポーネントの開発。
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-img
          class="imageRotate mt-4"
          :eager="true"
          :src="imageData['workRightImage']"
        ></v-img>
        <div style="margin-top:5%;">
          <div style="text-align:center; color:#0092F0; font-size:1.4em;">
            － デザイン/アイコン制作 －
          </div><br>
          <div style="width:85%; margin:auto; font-size:1.3em;">
            Adobe Illustrator, Photoshopを用いて、アイコン、テクスチャーを作成。
          </div>
        </div>
      </v-col>
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
        arrowImage:require("@/assets/arrows/fullWidthArrow.svg"),
        workCenterImage: require("@/assets/work/develop_components.png"),
        workRightImage: require("@/assets/work/ai_icon.png"),
      },
      showData: {
        showWorkTitle: true,
      }
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px 0px -5%",
      threshold: 0.5
    };

    const target = document.getElementById('workObserver');
    this.onIntersect(target, options);
  },
  methods: {
    showImages() {
      if(this.showData['showWorkTitle']) {
        this.showData['showWorkTitle'] = false;
      } else {
        this.showData['showWorkTitle'] = true;
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

.workTitleStyle {
  position: absolute;
  right:0;
  font-size: 3.2vw;
  font-style: oblique;
  font-weight: 1000;
  color: #0092F0;
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
  color: gray;
  width: 100%;
  height: 100%;
  z-index: 5;
  margin-top: 8%;
}

.imageRotate {
  transform: rotate( -3deg );
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
