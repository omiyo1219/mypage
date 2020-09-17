<template>
  <v-app class="contents">
    <div>
      <transition name="textSlide">
        <span class="skillTitleStyle" v-show="showData['showworkTitle']">
          Skill
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showArrow']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <v-row class="mainBody" no-gutters>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              v-show="showData['showImage']"
              class="btnCircle"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                class="img_wrap  mt-4"
                :src="imageData['htmlIcon']"
              ></v-img>
            </div>
          </template>
          <v-row align="center" no-gutters>
            <v-col cols="5" style="text-align:center">
              <v-img
                :src="imageData['htmlIcon']"
              ></v-img>
            </v-col>
            <v-col cols="7">
              <div>
                基本のHTML/CSSは元より、
                HTML5から追加されたcanvasの使用経験有り。
              </div>
            </v-col>
          </v-row>
        </v-tooltip>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <div v-show="showData['showImage']" class="btnCircle  mt-4">
          <v-img
            class="img_wrap"
            :src="imageData['javascriptIcon']"
          ></v-img>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <div v-show="showData['showImage']" class="btnCircle  mt-4">
          <v-img
            class="img_wrap"
            :src="imageData['vueIcon']"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <div v-show="showData['showImage']" class="btnCircle">
          <v-img
            class="img_wrap  mt-4"
            :src="imageData['psdIcon']"
          ></v-img>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <div v-show="showData['showImage']" class="btnCircle  mt-4">
          <v-img
            class="img_wrap"
            :src="imageData['aiIcon']"
          ></v-img>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <div v-show="showData['showImage']" class="btnCircle  mt-4">
          <v-img
            class="img_wrap"
            :src="imageData['xdIcon']"
          ></v-img>
        </div>
      </v-col>
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
        htmlIcon: require("@/assets/skill/html5_icon.svg"),
        javascriptIcon: require("@/assets/skill/javascript_icon.svg"),
        vueIcon: require("@/assets/skill/vue_icon.svg"),
        psdIcon: require("@/assets/skill/photoshop_icon.svg"),
        aiIcon: require("@/assets/skill/illustrator_icon.svg"),
        xdIcon: require("@/assets/skill/xd_icon.svg"),
      },
      showData: {
        showArrow: false,
        showworkTitle: false,
        showImage: true,
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
  margin-top: 8%;
}

.btnCircle {
  position: relative;
  display: inline-block;
  text-decoration: none;
  background: rgb(0,0,0,0);
  border: solid 2px #42AEEF;
  color: #FFF;
  width: 50%;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  transition: .4s;
}

.img_wrap:hover {
  opacity: 0.7;
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
