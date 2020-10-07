<template>
  <v-app>
    <div class="canvas_container">
      <div ref="canvasParent" class="canvas_parent">
        <canvas ref="canvas"  :width="width" :height="height" ></canvas>
      </div>
    </div>
    <v-container fluid fill-height class="mainContents">
      <transition>
        <v-row v-if="hideLoading" justify="center" no-gutters>
          <v-col cols="12" class="loadingFont">NOWLOADING</v-col>
          <v-col cols="6">
            <v-progress-linear
              :color="progressColor"
              height="15"
              :value="loadingTime"
              striped
            ></v-progress-linear>
          </v-col>
          <v-col cols="12" class="loadingFont">
            {{percentage}}%
          </v-col>
        </v-row>
      </transition>
      <transition name="welcome">
        <v-row v-if="hideWelcome">
          <v-col cols="12" class="elektrFont">WELCOME</v-col>
        </v-row>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
//import myProfile from './components/myProfile';

export default {
  name: 'Login',

  components: {
    //myProfile,
  },

  data() {
    return{
      loadingTime: null,
      timerObj:null,
      hideLoading: true,
      hideWelcome: false,
      progressColor:"#00fa9a",
      percentage: 0,

      width: window.innerWidth,
      height: window.innerHeight,
      canvasParent: null,
      canvas: null,
      context: null,
      imageMaterial: require("@/assets/images/sqare.svg"),
      imagebackground: require("@/assets/images/loadingBackground.svg"),
      columns: null,
      drops: [],
      minImgSize: 50,
      maxImgSize: 150,
      randomSize: null,
      imgSize: [],
    }
  },
  mounted(){
    this.timerObj = setInterval(this.countup, 50)

    window.addEventListener('resize', this.handleResize)

    this.canvasParent = this.$refs.canvasParent;
    this.canvas = this.$refs.canvas;
    this.context = this.canvas.getContext('2d');
    
    
    this.canvas.width = this.canvasParent.clientWidth;
    this.canvas.height = this.canvasParent.clientHeight;

    this.columns = this.width / this.maxImgSize; //表示させる行数
    console.log(this.columns)
    for(var x = 0; x < this.columns; x++){
      this.drops[x] = this.height; 

      this.randomImgSize();
      this.imgSize[x] = this.randomSize;
      this.draw();
    }
    setInterval(this.draw, 15); //一定時間ごとに特定の処理を繰り返す(第二引数は落下速度)
        
  },
  beforeDestroy: function(){
    window.removeEventListener('resize', this.handleResize)
  },
  methods:{
    countup(){
      this.loadingTime ++;
      this.percentage ++;
      
      if(this.loadingTime == 40){
        clearInterval(this.timerObj);
        this.loadingTime = 100;
        setTimeout(this.changeColorTime,50);
        setTimeout(this.loadingViewChange,400);
        setTimeout(this.welcomeViewChange,2000);
        setTimeout(this.routeChangeHome,4500);
      }
    },
    changeColorTime(){
      this.progressColor = "#ffb6c1"
      this.percentage = 100;
    },
    loadingViewChange(){
      this.hideLoading = !this.hideLoading;
    },
    welcomeViewChange(){
      this.hideWelcome = !this.hideWelcome;
    },
    routeChangeHome(){
      this.$router.push('/home');
    },
    draw(){
      
      var img = new Image();
      img.src = this.imageMaterial;

      var background = new Image();
      background.src = this.imagebackground;

      this.context.fillStyle="rgba(0,0,0,.09"; //backgroundcolor
      this.context.drawImage(background, 0, 0,  this.width,this.height+10);
      //this.context.drawImage(img,random2,random1,50,40);
      //console.log(i)
      
      
      for( var i = 0; i < this.drops.length; i++ ) {
        
        
        this.context.drawImage(img, i * this.maxImgSize, this.drops[i],  this.imgSize[i],this.imgSize[i]);
        
        if( this.drops[i] > this.height && Math.random() > 0.998 ){
          this.drops[i] = 0;
          this.randomImgSize();
          this.imgSize[i] = this.randomSize;
        }
        
        this.drops[i]++;
      } 
    },
    randomImgSize() {
      var min_img = Math.ceil(this.minImgSize);
      var max_img = Math.floor(this.maxImgSize);
      this.randomSize = Math.floor(Math.random() * (max_img - min_img)) + min_img; 
    },
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  }

};
</script>
<style>


.loadingFont{
  font-size: 30px;
  text-align: center;
  margin-left: 25px;
  color: #fff;
  letter-spacing: 0.8em;
  -webkit-text-stroke: 0.5px #a9a9a9;
}

.elektrFont{
  font-size: 50px;
  font-family: "elektr_05_2";
  text-align: center;
  margin-left: 25px;
  color: #fff;
  letter-spacing: 0.7em;
}

.v-leave-to {
  opacity: 0;
  transition: opacity 1.5s;
}

.welcome-enter-active {
  transition: opacity 1.0s;
}
.welcome-enter {
  opacity: 0;
}
.canvas_container {
  position: relative;
  z-index: 0;
}
.canvas_parent {
    position: absolute;
    z-index: 1;
}

.mainContents {
  z-index: 3;
}
</style>