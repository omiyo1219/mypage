webpackJsonp([0],{"+VkB":function(t,a){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojQzlDQUNBO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHJlY3QgeD0iLTI1LjkiIHk9Ii0xMS40IiBjbGFzcz0ic3QwIiB3aWR0aD0iMTA1MS45IiBoZWlnaHQ9IjEwMjIuOCIvPgo8L3N2Zz4K"},"7zck":function(t,a){},"89Sf":function(t,a){},L9Ku:function(t,a,e){t.exports=e.p+"static/img/developed_webAplication.64dfaa5.png"},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticStyle:{"max-height":"50px","z-index":"100"}},[e("v-app-bar",{attrs:{fixed:"",color:"#42AEEF",dark:"",elevation:8}},[e("v-row",{attrs:{align:"center"}},[e("v-toolbar-title",{staticClass:"hidden-sm-and-down ml-3"},[t._v("PORTFOLIO")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"3",sm:"2",md:"3",lg:"3",xl:"3"}},[e("v-btn",{staticClass:"topMenu",attrs:{text:""}},[e("span",{staticStyle:{color:"#FCF503"}},[t._v("A")]),t._v("bout\n          ")])],1),t._v(" "),e("v-col",{attrs:{cols:"3",sm:"2",md:"3",lg:"3",xl:"3"}},[e("v-btn",{staticClass:"topMenu",attrs:{text:""}},[e("span",{staticStyle:{color:"#FCF503"}},[t._v("W")]),t._v("ork\n          ")])],1),t._v(" "),e("v-col",{attrs:{cols:"3",sm:"2",md:"3",lg:"3",xl:"3"}},[e("v-btn",{staticClass:"topMenu",attrs:{text:""}},[e("span",{staticStyle:{color:"#FCF503"}},[t._v("S")]),t._v("kill\n          ")])],1),t._v(" "),e("v-col",{attrs:{cols:"3",sm:"2",md:"3",lg:"3",xl:"3"}},[e("v-btn",{staticClass:"topMenu",attrs:{text:""}},[e("span",{staticStyle:{color:"#FCF503"}},[t._v("C")]),t._v("ontact\n          ")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var n={name:"dropDownMatrix",data:function(){return{canvasData:{canvas:null,canvasParent:null,context:null,columns:null,drops:[],viewWidth:window.innerWidth,viewHeight:2e3},imageData:{imageMaterial:e("lZUV"),minImgSize:50,maxImgSize:150,randomSize:null,imgSize:[]}}},created:function(){},mounted:function(){window.addEventListener("resize",this.handleResize),this.canvasData.canvasParent=this.$refs.canvasParent,this.canvasData.canvas=this.$refs.canvas,this.canvasData.context=this.canvasData.canvas.getContext("2d"),this.canvasData.canvas.width=this.canvasData.canvasParent.clientWidth,this.canvasData.canvas.height=this.canvasData.canvasParent.clientHeight-30,this.canvasData.columns=this.canvasData.viewWidth/this.imageData.maxImgSize;for(var t=0;t<this.canvasData.columns;t++)this.canvasData.drops[t]=this.canvasData.viewHeight,this.randomImgSize(),this.imageData.imgSize[t]=this.imageData.randomSize,this.draw();setInterval(this.draw,15)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{draw:function(){var t=new Image;t.src=this.imageData.imageMaterial,this.canvasData.context.fillStyle="rgba(255,255,255,0.5",this.canvasData.context.fillRect(0,0,this.canvasData.viewWidth,this.canvasData.viewHeight);for(var a=0;a<this.canvasData.drops.length;a++)this.canvasData.context.drawImage(t,a*this.imageData.maxImgSize,this.canvasData.drops[a],this.imageData.imgSize[a],this.imageData.imgSize[a]),this.canvasData.drops[a]>.6*this.canvasData.viewHeight&&Math.random()>.997&&(this.canvasData.drops[a]=0,this.randomImgSize(),this.imageData.imgSize[a]=this.imageData.randomSize),this.canvasData.drops[a]++},randomImgSize:function(){var t=Math.ceil(this.imageData.minImgSize),a=Math.floor(this.imageData.maxImgSize);this.imageData.randomSize=Math.floor(Math.random()*(a-t))+t},handleResize:function(){this.canvasData.viewWidth=window.innerWidth,this.canvasData.viewHeight=2e3}}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"canvas_container"},[a("div",{ref:"canvasParent",staticClass:"canvas_parent"},[a("canvas",{ref:"canvas",attrs:{width:this.canvasData.viewWidth,height:this.canvasData.viewHeight}})])])},staticRenderFns:[]};var r={name:"App",components:{topbar:e("VU/8")({name:"Home",data:function(){return{}}},i,!1,function(t){e("pENz")},"data-v-547bb02a",null).exports,dropDownMatrix:e("VU/8")(n,o,!1,function(t){e("XOW0")},"data-v-9ee57604",null).exports}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("v-app",[a("topbar"),this._v(" "),a("dropDownMatrix"),this._v(" "),a("v-main",[a("router-view")],1)],1)},staticRenderFns:[]};var l=e("VU/8")(r,c,!1,function(t){e("XSzX")},null,null).exports,h=e("/ocq"),v={name:"topContents",data:function(){return{arrowImage:e("eVb5"),showData:{showArrow:!1,showName:!1}}},mounted:function(){setTimeout(this.slideArrow,200),setTimeout(this.slideName,1e3)},methods:{slideArrow:function(){this.showData.showArrow=!0},slideName:function(){this.showData.showName=!0}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"topContents"},[e("transition",{attrs:{name:"fade"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.showData.showName,expression:"showData['showName']"}]},[t._v("\n      HIROTSUGU OK"),e("span",{staticStyle:{color:"#FCF503"}},[t._v("A")]),t._v("DA\n    ")])]),t._v(" "),e("br"),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.showData.showName,expression:"showData['showName']"}]},[e("span",{staticClass:"roleTitle"},[t._v("FRONTEND ENGINEER")])])])],1)},staticRenderFns:[]};var d=e("VU/8")(v,m,!1,function(t){e("TXi1")},"data-v-05d56827",null).exports,w={name:"aboutContents",props:{height:{type:Number}},data:function(){return{imageData:{arrowImage:e("eVb5"),profileImage:e("+VkB")},showData:{showArrow:!1,showAboutTitle:!1}}},mounted:function(){setTimeout(this.slideArrow,200),setTimeout(this.slideName,1e3)},methods:{slideArrow:function(){this.showData.showArrow=!0},slideName:function(){this.showData.showAboutTitle=!0}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticStyle:{"background-color":"rgb(0,0,0,0)"}},[e("div",[e("transition",{attrs:{name:"textSlide"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.showData.showAboutTitle,expression:"showData['showAboutTitle']"}],staticClass:"aboutTitleStyle"},[t._v("\n        About\n      ")])]),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.showData.showArrow,expression:"showData['showArrow']"}],staticClass:"setArrowPos",attrs:{src:t.imageData.arrowImage}})])],1),t._v(" "),e("v-row",{staticClass:"mainBody",attrs:{align:"center","no-gutters":""}},[e("v-col",{staticClass:"ml-3 mr-3",attrs:{cols:"12",sm:"12",md:"5",lg:"5",xl:"5"}},[e("v-img",{attrs:{src:t.imageData.profileImage,width:"95%",height:"95%"}})],1),t._v(" "),e("v-col",{attrs:{cols:"1",sm:"12",md:"1",lg:"1",xl:"1"}}),t._v(" "),e("v-col",{staticStyle:{"font-size":"1.9em",color:"gray"},attrs:{cols:"12",sm:"12",md:"5",lg:"5",xl:"5"}},[e("span",[e("br"),t._v("\n        岡田　尋嗣"),e("br"),e("br"),t._v("\n        1997年5月6日生まれ、仙台高等専門学校名取キャンパス機械システム工学科卒。株式会社オーパス所属。"),e("br"),t._v("\n        航空宇宙業界から転身し、2019年からフロントエンジニアとしてキャリアスタート。"),e("br"),t._v("\n        現在は、中規模Webアプリケーション開発、UIデザイン及びコンポーネント制作を手掛ける。"),e("br"),t._v("\n        20代前半という研鑽の時期を日々精進中。\n      ")])])],1)],1)},staticRenderFns:[]};var g=e("VU/8")(w,u,!1,function(t){e("o0G5")},"data-v-80cb33ea",null).exports,D={name:"workContents",props:{height:{type:Number}},data:function(){return{imageData:{arrowImage:e("eVb5"),workLeftImage:e("L9Ku")},showData:{showArrow:!1,showworkTitle:!1}}},mounted:function(){setTimeout(this.slideArrow,200),setTimeout(this.slideName,1e3)},methods:{slideArrow:function(){this.showData.showArrow=!0},slideName:function(){this.showData.showworkTitle=!0}}},I={render:function(){var t=this.$createElement,a=this._self._c||t;return a("v-app",{staticStyle:{"background-color":"rgb(0,0,0,0)"}},[a("div",[a("transition",{attrs:{name:"textSlide"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:this.showData.showworkTitle,expression:"showData['showworkTitle']"}],staticClass:"workTitleStyle"},[this._v("\n        Work\n      ")])]),this._v(" "),a("transition",{attrs:{name:"slide"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:this.showData.showArrow,expression:"showData['showArrow']"}],staticClass:"setArrowPos",attrs:{src:this.imageData.arrowImage}})])],1),this._v(" "),a("v-row",{staticClass:"mainBody",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"4",sm:"12",md:"4",lg:"4",xl:"4"}},[a("v-img",{attrs:{src:this.imageData.workLeftImage}})],1)],1)],1)},staticRenderFns:[]};var p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("v-app",[a("h3",[this._v("Contact")])])},staticRenderFns:[]};var b={name:"Home",components:{topContents:d,aboutContents:g,workContents:e("VU/8")(D,I,!1,function(t){e("89Sf")},"data-v-64661370",null).exports,contactContents:e("VU/8")({name:"contactContents",data:function(){return{}}},p,!1,function(t){e("XPFT")},"data-v-7d063d02",null).exports},data:function(){return{screenSize:{topContentsHeight:null}}},mounted:function(){window.addEventListener("resize",this.handleResize),console.log(screen.height),this.screenSize.topContentsHeight=screen.height-200},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.screenSize.topContentsHeight=screen.height-200}}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{style:{height:this.screenSize.topContentsHeight+"px"},attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("topContents")],1)],1),this._v(" "),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("aboutContents",{attrs:{height:this.screenSize.otherContentsHeight}})],1)],1),this._v(" "),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("workContents")],1)],1)],1)},staticRenderFns:[]};var C=e("VU/8")(b,f,!1,function(t){e("vuxw")},"data-v-7789d502",null).exports;s.default.use(h.a);var z=new h.a({routes:[{path:"/",name:"Home",component:C}]}),M=e("3EgV"),x=e.n(M);e("7zck");s.default.config.productionTip=!1,s.default.use(x.a),new s.default({el:"#app",router:z,vuetify:new x.a({icons:{iconfont:"mdiSvg"}}),components:{App:l},template:"<App/>"})},TXi1:function(t,a){},XOW0:function(t,a){},XPFT:function(t,a){},XSzX:function(t,a){},eVb5:function(t,a){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTkyMCA1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkyMCA1NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0OEE0REM7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkyMCw1Mi41SDB2LTVoMTgyMHYtNDVDMTg1My4zLDE5LjIsMTg4Ni43LDM1LjgsMTkyMCw1Mi41eiIvPgo8L3N2Zz4K"},lZUV:function(t,a){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwIDgwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC4yO30KCS5zdDF7ZmlsbDojOTRGREZGO30KPC9zdHlsZT4KPGcgY2xhc3M9InN0MCI+Cgk8cmVjdCB4PSIxMCIgeT0iMi41IiBjbGFzcz0ic3QxIiB3aWR0aD0iNjAiIGhlaWdodD0iNzUiLz4KPC9nPgo8L3N2Zz4K"},o0G5:function(t,a){},pENz:function(t,a){},vuxw:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.46b6901152fcc7c88b63.js.map