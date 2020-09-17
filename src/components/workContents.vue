<template>
  <v-app  class="contents">
    <div>
      <transition name="textSlide">
        <span class="workTitleStyle" v-show="showData['showworkTitle']">
          Work
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showArrow']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <v-row class="mainBody" no-gutters dense>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
      >
        <v-img
          class="imageRotate mt-4"
          :src="imageData['workLeftImage']"
        ></v-img>
        <div style="margin-top:5%;">
          <div style="text-align:center; color:#42AEEF; font-size:1.4em;">
            － 中規模Webサービス開発 －
          </div><br>
          <div style="width:85%; margin:auto; font-size:1.3em;">
            業務管理システムの主にフロント実装。Vue.jsにて開発。
            UIフレームワークはBootstrapVueを使用。<br>
            ほぼ全てのhtml/cssのコーディングを担当。
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
      >
        <v-img
          class="imageRotate mt-4"
          :src="imageData['workCenterImage']"
        ></v-img>
        <div style="margin-top:5%;">
          <div style="text-align:center; color:#42AEEF; font-size:1.4em;">
            － UIコンポーネント開発 －
          </div><br>
          <div style="width:85%; margin:auto; font-size:1.3em;">
            UIのデザイン、およびUIコンポーネントを開発。
            ボタンやダイアログ、カレンダーの作成。
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
      >
        <v-img
          class="imageRotate mt-4"
          :src="imageData['workRightImage']"
        ></v-img>
        <div style="margin-top:5%;">
          <div style="text-align:center; color:#42AEEF; font-size:1.4em;">
            － デザイン/アイコン制作 －
          </div><br>
          <div style="width:85%; margin:auto; font-size:1.3em;">
            Adobe Illustratorを用いて、アイコン、テクスチャーを作成。
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
        arrowImage:require("@/assets/fullWidthArrow.svg"),
        workLeftImage: require("@/assets/work/develop_Aplications.png"),
        workCenterImage: require("@/assets/work/develop_components.png"),
        workRightImage: require("@/assets/work/ai_icon.png"),
      },
      showData: {
        showArrow: false,
        showworkTitle: false
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
      this.showData['showworkTitle'] = true;
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
  transition: transform .28s
}
.textSlide-enter {
  transform: translateX(-150px)
}

</style>
