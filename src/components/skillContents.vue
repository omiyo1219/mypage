<template>
  <v-app class="contents">
    <div id="skillObserver">
      <transition name="textSlide">
        <span class="skillTitleStyle" v-show="showData['showSkillTitle']">
          Skill
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showSkillTitle']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <v-row class="mainBody" no-gutters>
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              class="btnCircle"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                class="img_wrap"
                :eager="true"
                :src="imageData['htmlIcon']"
              ></v-img>
            </div>
          </template>
          <v-row class="mt-4 mb-4" align="center" style="max-width:35vw;" no-gutters>
            <v-col
              cols="12"
              sm="12"
              md="5"
              lg="5"
              xl="5"
              style="text-align:center"
            >
              <v-img
                class="ml-2 mr-2"
                :eager="true"
                :src="imageData['htmlHoverImage']"
                width="90%"
              ></v-img>
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
            ></v-col>
            <v-col
              cols="6"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <div style="min-width:120px; font-size:2vh;">
                基本のHTML/CSSは元より、
                HTML5から追加されたcanvasの使用経験有り。
                <br>
                canvasではpainter機能や3Dオブジェクトの表示も可能。
              </div>
            </v-col>
          </v-row>
        </v-tooltip>
      </v-col>
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              class="btnCircle"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                class="img_wrap"
                :eager="true"
                :src="imageData['javascriptIcon']"
              ></v-img>
            </div>
          </template>
          <v-row class="mt-4 mb-4" align="center" style="max-width:35vw;" no-gutters>
            <v-col
              cols="12"
              sm="12"
              md="5"
              lg="5"
              xl="5"
              style="text-align:center"
            >
              <v-img
                class="ml-2 mr-2"
                :eager="true"
                :src="imageData['javascriptHoverImage']"
                width="90%"
              ></v-img>
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
            ></v-col>
            <v-col
              cols="6"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <div style="min-width:120px; font-size:2vh;">
                Javascript使用歴は9ヶ月程度であるが、複雑なアニメーションやカレンダーのアルゴリズムも実装経験有。
              </div>
            </v-col>
          </v-row>
        </v-tooltip>
      </v-col>
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              class="btnCircle"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                class="img_wrap"
                :eager="true"
                :src="imageData['vueIcon']"
              ></v-img>
            </div>
          </template>
          <v-row class="mt-4 mb-4" align="center" style="max-width:35vw;" no-gutters>
            <v-col
              cols="12"
              sm="12"
              md="5"
              lg="5"
              xl="5"
            >
              <v-img
                class="ml-2 mr-2"
                :eager="true"
                :src="imageData['vueHoverImage']"
                width="90%"
              ></v-img>
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
            ></v-col>
            <v-col
              cols="6"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <div style="min-width:120px; font-size:2vh;">
                Vue.jsを用い、UIコンポーネントのデザイン/制作をメインとしての開発経験有り。<br>
                本PortfolioもVue.jsによって制作。
              </div>
            </v-col>
          </v-row>
        </v-tooltip>
      </v-col>


      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              class="btnCircle"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                class="img_wrap"
                :eager="true"
                :src="imageData['psdIcon']"
              ></v-img>
            </div>
          </template>
          <v-row class="mt-4 mb-4" align="center" style="max-width:35vw;" no-gutters>
            <v-col
              cols="12"
              sm="12"
              md="5"
              lg="5"
              xl="5"
            >
              <v-img
                class="ml-2 mr-2"
                :eager="true"
                :src="imageData['psdHoverImage']"
                width="90%"
              ></v-img>
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
            ></v-col>
            <v-col
              cols="6"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <div style="min-width:120px; font-size:2vh;">
                Photoshopを用いて、簡単な画像トリミングや現実の写真をアニメ塗りに調整などの経験あり。
              </div>
            </v-col>
          </v-row>
        </v-tooltip>
      </v-col>
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              class="btnCircle"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                class="img_wrap"
                :eager="true"
                :src="imageData['aiIcon']"
              ></v-img>
            </div>
          </template>
          <v-row class="mt-4 mb-4" align="center" style="max-width:35vw;" no-gutters>
            <v-col
              cols="12"
              sm="12"
              md="5"
              lg="5"
              xl="5"
            >
              <v-img
                class="ml-2 mr-2"
                :eager="true"
                :src="imageData['aiHoverImage']"
                width="90%"
              ></v-img>
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
            ></v-col>
            <v-col
              cols="6"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <div style="min-width:120px; font-size:2vh;">
                illustratorを用いて、UIアイコンやロゴ制作の経験あり。<br>
                本Webサイトで使用されている素材もillustratorによって作成。
              </div>
            </v-col>
          </v-row>
        </v-tooltip>
      </v-col>
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        style="text-align:center"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              class="btnCircle"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                class="img_wrap"
                :eager="true"
                :src="imageData['xdIcon']"
              ></v-img>
            </div>
          </template>
          <v-row class="mt-4 mb-4" align="center" style="max-width:35vw;" no-gutters>
            <v-col
              cols="12"
              sm="12"
              md="5"
              lg="5"
              xl="5"
            >
              <v-img
                class="ml-2 mr-2"
                :eager="true"
                :src="imageData['xdHoverImage']"
                width="90%"
              ></v-img>
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
            ></v-col>
            <v-col
              cols="6"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <div style="min-width:120px; font-size:2vh;">
                XDを用いて、Webデザインやプロトタイプの使用によりUIの挙動やWebサイトの遷移の作成。<br>
                会議などで積極的に使用することでクライアントのコンセンサスも円滑に得ることが可能。
              </div>
            </v-col>
          </v-row>
        </v-tooltip>
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
        arrowImage: require("@/assets/arrows/fullWidthArrow.svg"),
        htmlIcon: require("@/assets/skill/html5_icon.svg"),
        javascriptIcon: require("@/assets/skill/javascript_icon.svg"),
        vueIcon: require("@/assets/skill/vue_icon.svg"),
        psdIcon: require("@/assets/skill/photoshop_icon.svg"),
        aiIcon: require("@/assets/skill/illustrator_icon.svg"),
        xdIcon: require("@/assets/skill/xd_icon.svg"),
        htmlHoverImage: require("@/assets/skill/paint.gif"),
        javascriptHoverImage: require("@/assets/skill/matrix.gif"),
        vueHoverImage: require("@/assets/skill/calendar.gif"),
        psdHoverImage: require("@/assets/skill/photoshop_skill.png"),
        aiHoverImage: require("@/assets/skill/illustrator_skill.png"),
        xdHoverImage: require("@/assets/skill/xd.gif"),
      },
      showData: {
        showSkillTitle: true,
      }
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px 0px -5%",
      threshold: 0
    }

    const target = document.getElementById('skillObserver');
    this.onIntersect(target, options);
  },
  methods: {
    showImages() {
      if(this.showData['showSkillTitle']) {
        this.showData['showSkillTitle'] = false;
      } else {
        this.showData['showSkillTitle'] = true;
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
  color: #b04df2;
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
  border: solid 2px #b04df2;
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
  background: #b04df2;
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
