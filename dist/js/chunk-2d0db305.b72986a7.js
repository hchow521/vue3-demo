(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db305"],{"6f98":function(t,e,n){"use strict";n.r(e);var o=n("7a23"),r=Object(o["createTextVNode"])("1"),c=Object(o["createTextVNode"])("2");function u(t,e,n,u,a,i){var d=Object(o["resolveComponent"])("el-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(d,{onClick:e[0]||(e[0]=function(t){return i.addRoute(1)})},{default:Object(o["withCtx"])((function(){return[r]})),_:1}),Object(o["createVNode"])(d,{onClick:e[1]||(e[1]=function(t){return i.addRoute(2)})},{default:Object(o["withCtx"])((function(){return[c]})),_:1}),Object(o["createVNode"])(d,{onClick:e[2]||(e[2]=function(t){return a.route=Date.now()})},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(a.route),1)]})),_:1})],64)}var a={data:function(){return{route:Date.now()}},methods:{addRoute:function(t){var e=this.route;this.$store.commit("SET_LIST",{key:e,value:t}),this.$router.push({name:"redirect",params:{name:e,path:"/"+e,component:"dynamicRoute/parent",title:e}})}}},i=n("6b0d"),d=n.n(i);const b=d()(a,[["render",u]]);e["default"]=b}}]);
//# sourceMappingURL=chunk-2d0db305.b72986a7.js.map