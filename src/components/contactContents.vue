<template>
  <v-app class="contents">
    <div>
      <transition name="textSlide">
        <span class="skillTitleStyle" v-show="showData['showworkTitle']">
          Contact
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showArrow']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <v-row class="mainBody" no-gutters>
      <v-col class="inputFormTitle" cols="4" align-self="center">
        お名前
      </v-col>
      <v-col cols="8" align-self="center">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="お名前"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </form>
      </v-col>
      <v-col class="inputFormTitle" cols="4" align-self="center">
        メールアドレス
      </v-col>
      <v-col cols="8" align-self="center">
        <form>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </form>
      </v-col>
      <v-col class="inputFormTitle" cols="4" style="margin-top:4%">
        お問い合わせ内容
      </v-col>
      <v-col cols="8" style="margin-top:4%">
        <form>
          <v-textarea
            outlined
            placeholder="入力してください"
            :error-messages="contentsErrors"
            v-model="contents"
            @input="$v.contents.$touch()"
            @blur="$v.contents.$touch()"
          ></v-textarea>
        </form>
      </v-col>
      <v-btn class="mr-4" @click="sendForm()">submit</v-btn>
      <v-btn @click="resetForm()">clear</v-btn>
    </v-row>
  </v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'skillContents',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    contents: { required}
  },
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
        htmlHoverImage: require("@/assets/skill/paint.gif"),
        javascriptHoverImage: require("@/assets/skill/matrix.gif"),
        vueHoverImage: require("@/assets/skill/calendar.gif"),
        psdHoverImage: require("@/assets/skill/photoshop_skill.png"),
        aiHoverImage: require("@/assets/skill/illustrator_skill.png"),
        xdHoverImage: require("@/assets/skill/xd.gif"),
      },
      showData: {
        showArrow: false,
        showworkTitle: false,
        showImage: true,
      },
      name: '',
      email: '',
      contents: '',
    }
  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('10文字以下で入力してください')
      !this.$v.name.required && errors.push('※この項目は入力必須です')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('メールアドレスのフォーマットで入力してください')
      !this.$v.email.required && errors.push('※この項目は入力必須です')
      return errors
    },
    contentsErrors () {
      const errors = []
      if (!this.$v.contents.$dirty) return errors
      !this.$v.contents.required && errors.push('※この項目は入力必須です')
      return errors
    },
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
    },
    sendForm () {
      this.$v.$touch()
    },
    resetForm () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
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
  margin-top: 7%;
}

.inputFormTitle {
  font-size: 1.5vw;
  text-align: center;
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
