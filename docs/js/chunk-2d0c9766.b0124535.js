(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9766"],{"58f3":function(t,n,i){"use strict";i.r(n);var a=i("7a23"),e=Object(a["createElementVNode"])("canvas",null,null,-1);function s(t,n,i,s,o,h){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[e,Object(a["createElementVNode"])("button",{onClick:n[0]||(n[0]=function(){return h.toggle&&h.toggle.apply(h,arguments)})},"toggle")])}var o={data:function(){return{canvas:null,length:0,add:!0,animation:null,timer:0}},created:function(){this.initCanvas()},methods:{initCanvas:function(){var t,n=this,i=null===(t=this.$el)||void 0===t?void 0:t.querySelector("canvas");i?(i.width=400,i.height=400,this.canvas=i.getContext("2d"),this.canvas.strokeStyle="#999",console.log(this.canvas),this.animation=requestAnimationFrame(this.loop)):this.timer>100?alert("初始化canvas超时，请检查canvas是否存在"):(this.timer++,setTimeout((function(){n.initCanvas()}),100))},loop:function(){this.canvas.fillStyle="#f5f5f5",this.canvas.fillRect(0,0,400,400),this.add?(this.length++,this.length>400&&(this.length=400,this.add=!1)):(this.length--,this.length<0&&(this.length=0,this.add=!0)),this.canvas.beginPath(),this.canvas.moveTo(0,0),this.canvas.lineTo(this.length,this.length),this.canvas.stroke(),this.animation=requestAnimationFrame(this.loop)},stop:function(){cancelAnimationFrame(this.animation),this.animation=null},toggle:function(){this.animation?this.stop():this.canvas&&(this.animation=requestAnimationFrame(this.loop))}},activated:function(){!this.animation&&this.canvas&&(this.animation=requestAnimationFrame(this.loop))},deactivated:function(){this.stop()}},h=i("6b0d"),l=i.n(h);const c=l()(o,[["render",s]]);n["default"]=c}}]);
//# sourceMappingURL=chunk-2d0c9766.b0124535.js.map