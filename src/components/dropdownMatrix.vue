<template>
  <div class="canvas_container">
    <div ref="canvasParent" class="canvas_parent">
      <canvas ref="canvas"  :width="canvasData['viewWidth']" :height="canvasData['viewHeight']" ></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropDownMatrix',
  data(){
    return{
      canvasData: {
        canvas: null,
        canvasParent: null,
        context: null,
        columns: null,
        drops: [],
        viewWidth: window.innerWidth,
        viewHeight: 3000,
      },
      imageData: {
        imageMaterial: require("@/assets/sqare.svg"),
        minImgSize: 50,
        maxImgSize: 150,
        randomSize: null,
        imgSize: [],
      }
    }
  },
  created() {
  },
  mounted: function(){

    window.addEventListener('resize', this.handleResize);
    this.canvasData['canvasParent'] = this.$refs.canvasParent;
    this.canvasData['canvas'] = this.$refs.canvas;
    this.canvasData['context'] = this.canvasData['canvas'].getContext('2d');
    this.canvasData['canvas'].width = this.canvasData['canvasParent'].clientWidth;
    this.canvasData['canvas'].height = this.canvasData['canvasParent'].clientHeight-30;

    this.canvasData['columns'] = this.canvasData['viewWidth'] / this.imageData['maxImgSize']; //表示させる行数
    for(var x = 0; x < this.canvasData['columns']; x++){
      this.canvasData['drops'][x] = this.canvasData['viewHeight']; 

      this.randomImgSize();
      this.imageData['imgSize'][x] = this.imageData['randomSize'];
      this.draw();
    }
    setInterval(this.draw, 15); //一定時間ごとに特定の処理を繰り返す(第二引数は落下速度)
  },
  beforeDestroy: function(){
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    draw(){
      
      var img = new Image();
      img.src = this.imageData['imageMaterial'];

      this.canvasData['context'].fillStyle="rgba(255,255,255,0.5"; //backgroundcolor
      this.canvasData['context'].fillRect(0,0,this.canvasData['viewWidth'],this.canvasData['viewHeight']);
      
      for( var i = 0; i < this.canvasData['drops'].length; i++ ) {
        this.canvasData['context'].drawImage(
          img,
          i * this.imageData['maxImgSize'],
          this.canvasData['drops'][i],
          this.imageData['imgSize'][i],
          this.imageData['imgSize'][i]
        );
        
        if( this.canvasData['drops'][i] > this.canvasData['viewHeight']*0.6 && Math.random() > 0.997 ){
          this.canvasData['drops'][i] = 0;
          this.randomImgSize();
          this.imageData['imgSize'][i] = this.imageData['randomSize'];
        }
        this.canvasData['drops'][i]++;
      } 
    },
    randomImgSize() {
      var min_img = Math.ceil(this.imageData['minImgSize']);
      var max_img = Math.floor(this.imageData['maxImgSize']);
      this.imageData['randomSize'] = Math.floor(Math.random() * (max_img - min_img)) + min_img; 
    },
    handleResize() {
      this.canvasData['viewWidth'] = window.innerWidth;
      this.canvasData['viewHeight'] = 3000;
    } 
  }
}
</script>
<style scoped>
.canvas_container {
  position: relative;
  z-index: 0;
}
.canvas_parent {
    position: absolute;
    z-index: 2;
}
</style>