<template>
  <v-app class="contents">
    <div id="contactObserver" style="margin-top:2%">
      <transition name="textSlide">
        <span class="skillTitleStyle" v-show="showData['showContactTitle']">
          Contact
        </span>
      </transition>
      <transition name="slide">
        <img v-show="showData['showContactTitle']" class="setArrowPos" :src="imageData['arrowImage']">
      </transition>
    </div>
    <form action="https://api.staticforms.xyz/submit" method="post">
      <v-row class="mainBody" no-gutters>
        <v-col cols="1"></v-col>
        <v-col class="inputFormTitle" cols="4" align-self="center">
          お名前
        </v-col>
        <v-col cols="6" align-self="center">
          <v-text-field
            v-model="name"
            name="name"
            :error-messages="nameErrors"
            :counter="10"
            label="お名前"
            required
            clearable
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="1"></v-col>

        <v-col cols="1"></v-col>
        <v-col class="inputFormTitle" cols="4" align-self="center">
          メールアドレス
        </v-col>
        <v-col cols="6" align-self="center">
          <v-text-field
            v-model="email"
            name="email" 
            :error-messages="emailErrors"
            label="E-mail"
            required
            clearable
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="1"></v-col>

        <v-col cols="1"></v-col>
        <v-col class="inputFormTitle" cols="4" style="margin-top:4%">
          お問い合わせ内容
        </v-col>
        <v-col cols="6" style="margin-top:4%">
          <v-textarea
            outlined
            name="message"
            placeholder="入力してください"
            :error-messages="contentsErrors"
            v-model="contents"
            clearable
            @input="$v.contents.$touch()"
            @blur="$v.contents.$touch()"
          ></v-textarea>
        </v-col>
        <v-col cols="1"></v-col>
        <v-row no-gutters justify="center">
          <v-btn
            type="submit"
            value="Submit"
            depressed
            rounded
            dark
            color="#b04df2"
            width="15%"
          >
            送信
          </v-btn>
        </v-row>
      </v-row>
      <input
        type="hidden"
        name="accessKey"
        value="15aad842-57a3-4891-9d90-cd942eee4d60"
      >
      <input type="text" name="honeypot" style="display:none">
      <input type="hidden" name="subject" value="お問い合わせ">
      <input type="hidden" name="replyTo" value="@">
      <input type="hidden" name="redirectTo" value="https://omiyo1219.github.io/mypage/#/success">
    </form>
  </v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'contactContents',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    contents: { required}
  },
  data () {
    return {
      imageData: {
        arrowImage: require("@/assets/arrows/fullWidthArrow.svg"),
      },
      showData: {
        showContactTitle: true,
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
    const options = {
      root: null,
      rootMargin: "0px 0px -1%",
      threshold: 0
    };

    const target = document.getElementById('contactObserver');
    this.onIntersect(target, options);
  },
  methods: {
    showImages() {
      if(this.showData['showContactTitle']) {
        this.showData['showContactTitle'] = false;
      } else {
        this.showData['showContactTitle'] = true;
      }
    },
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.slideImages, options);
      observer.observe(target);
    },
    slideImages() {
      this.showImages();
    },
    submitForm(){
      this.$v.$touch();
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
  margin-top: 8%;
  width: 100%;
  height: 100%;
  color: gray;
  z-index: 5;
}

.mailIconStyle {
  color: #b04df2;
  transform: scale(4.5, 4.5);
  transition-duration: 0.3s;
}

.mailIconStyle:hover {
  opacity: 0.7;
  color: #fff;
  background-color: #b04df2;
  transition-duration: 0.3s;
}

.submitStyle:hover {
  background-color: rgb(132,230,232,0.8);
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
