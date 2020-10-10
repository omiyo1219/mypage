<template>
<v-app>
  <div class="backGround">
    <div v-for="item in arrowData['blueArrow']">
      <transition name="slide" >
        <img
          v-show="item['show']"
          class="blueArrowStyle"
          :src="imageData['blueArrowImage']"
          :style="{
            width:item['width'],
            height:item['height'],
            bottom:item['position']
          }"
        >
      </transition>
    </div>
    <div v-for="(item, index) in arrowData['whiteArrow']">
      <img
        v-show="item['show']"
        :class="item['class']"
        :src="imageData['whiteArrowImage']"
        :style="{
          top: item['position'],
        }"
      >
    </div>
    <div
      id="text"
      v-show="textData['show']"
      class="textStyle"
      :style="{
        top: textData['top'],
      }"
    >
      <span style="color:#FCF503">W</span>elcome
    </div>
    
  </div>
</v-app>
</template>

<script>
export default {
  name: 'firstArrowEffect',
  data () {
    return {
      imageData: {
        blueArrowImage:require("@/assets/largeArrow.svg"),
        whiteArrowImage:require("@/assets/largeArrow_white.svg"),
      },
      arrowData: {
        blueArrow: [],
        whiteArrow: [],
        blueArrowCount: 5,
        whiteArrowCount: 2,
      },
      textData: {
        show: false,
        top: null,
      },
      showBlueFlag: false,
    }
  },
  watch: {
    showBlueFlag(){
      setTimeout(()=>{
        for(var i=0; i < this.arrowData['whiteArrowCount']; i++) {
          this.arrowData['whiteArrow'][i]['show'] = true;
        }
      },1000);

      setTimeout(()=>{
        this.textData['show'] = true;
      },1800);
    }
  },
  mounted() {
    this.setBlueArrow();
    this.setWhiteArrow();
    this.setTextData()
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.resizeArrowData();
    },
    setBlueArrow() {
      var arrowSize = window.innerHeight / this.arrowData['blueArrowCount'];
      var blueArrow = [];
      for(var i=0; i < this.arrowData['blueArrowCount']; i++) {
        blueArrow.push({
          show     : false,
          width    : window.innerWidth,
          height   : arrowSize * 2.5 + "px",
          position : arrowSize * [i] + "px",
        });
      }
      this.arrowData['blueArrow'] = blueArrow;

      var timerId;
      var i = 0;
      timerId = setInterval(() =>{
        this.arrowData['blueArrow'][i]['show'] = true;
        i ++;
        if(i == this.arrowData['blueArrowCount']){
          clearInterval(timerId);
          this.showBlueFlag = true;
        }
      }, 200);
    },
    setWhiteArrow() {
      var arrowPos = window.innerHeight / 4;
      var whiteArrow = [];
      for(var i=0; i < this.arrowData['whiteArrowCount']; i++) {
        whiteArrow.push({
          show     : false,
          class    : 'whiteArrowStyle' + [i],
          position : arrowPos * [i] * 3  + 'px',
        });
      }
      this.arrowData['whiteArrow'] = whiteArrow;
    },
    setTextData() {
      var client_h = document.getElementById('text').clientHeight;
      this.textData['top'] = (window.innerHeight / 2 - client_h / 2) + 'px';
      console.log(client_h)
    },
    resizeArrowData() {
      var blueArrowSize = window.innerHeight / this.arrowData['blueArrowCount'];
      for(var i=0; i < this.arrowData['blueArrowCount']; i++) {
        this.arrowData['blueArrow'][i]['width'] = window.innerWidth;
        this.arrowData['blueArrow'][i]['height'] = blueArrowSize * 2.5 + "px";
        this.arrowData['blueArrow'][i]['position'] = [i] * blueArrowSize + "px";
      }

      var whiteArrowPos = window.innerHeight / 4;
      this.arrowData['whiteArrow'][1]['position'] = whiteArrowPos * 3 + 'px';
    }
  }
}
</script>

<style scoped>
.backGround {
  position: relative;
  width: 100%;
  height: 100%;
}

.blueArrowStyle {
  position: absolute;
  left: -1000px;
  z-index: 0;
}

.whiteArrowStyle0 {
  position: absolute;
  z-index: 1;
  animation: SlideInTop 1.8s;
  animation-duration: 5s;
  animation-timing-function: cubic-bezier(.02,.51,0,1);
}
.whiteArrowStyle1 {
  position: absolute;
  z-index: 1;
  transform: rotateZ(180deg);
  animation: SlideInBottom 1.8s;
  animation-duration: 5s;
  animation-timing-function: cubic-bezier(.02,.51,0,1);
}

.textStyle {
  position: relative;
  text-align: center;
  font-size: 10vh;
  letter-spacing: 5px;
  font-weight: 1000;
  color: white;
  z-index: 3;
  animation: SlideInText 1.8s;
  animation-duration: 5s;
  animation-timing-function: cubic-bezier(.02,.51,0,1);
}

@keyframes SlideInTop {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes SlideInBottom {
  0% {
    transform: rotateZ(180deg) translateX(100%);
  }
  100% {
    transform: rotateZ(180deg) translateX(0);
  }
}
@keyframes SlideInText {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.slide-enter-active, .slide-leave-active {
  transition: transform 1.2s
}
.slide-enter {
  transform: translateX(100%)
}

</style>
