// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(e,t,n){"use strict";e.exports={props:["menu_arr","menu_position","menu_height","menu_background_color","use_menu","menu_border_width","menu_font_size","menu_checked_color","menu_border_color","menu_font_color"],methods:{switchMenuHandle:function(e,t){this.$emit("switchMenu",e,t)}}}},function(e,t){e.exports={"switch-menu-wrap":{position:"absolute",left:0,width:750,flexDirection:"row",alignItems:"center"},top:{top:0},bottom:{bottom:0},"switch-menu-item":{flex:1,justifyContent:"center",alignItems:"center",borderBottomStyle:"solid",borderTopStyle:"solid"},"switch-menu-item-txt":{justifyContent:"center",alignItems:"center"},"switch-menu-item-img":{justifyContent:"center",alignItems:"center",width:44,height:44}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["switch-menu-wrap"],class:[e.menu_position?"top":"bottom"],style:{height:e.menu_height,backgroundColor:e.menu_background_color}},[e.use_menu?e._t("default"):e._e(),e._l(e.menu_arr,function(t,o){return e.use_menu?e._e():n("div",{key:o,staticClass:["switch-menu-item"],style:{height:e.menu_height,borderTopWidth:(t.img_src,e.menu_position?0:e.menu_border_width),borderBottomWidth:(t.img_src,e.menu_position?e.menu_border_width:0),borderTopColor:t.img_src?e.menu_border_color:t.checked?e.menu_checked_color:e.menu_border_color,borderBottomColor:t.img_src?e.menu_border_color:t.checked?e.menu_checked_color:e.menu_border_color},on:{click:function(n){e.switchMenuHandle(t,o)}}},[t.img_src?n("image",{staticClass:["switch-menu-item-img"],attrs:{src:t.checked?t.img_checked_src||t.img_src:t.img_src}}):e._e(),n("text",{staticClass:["switch-menu-item-txt"],style:{color:t.checked?e.menu_checked_color:e.menu_font_color,fontSize:t.img_src?"22px":e.menu_font_size}},[e._v(e._s(t.txt))])])})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){"use strict";var o=n(9);e.exports={props:{menu_position:{default:"bottom"},menu_height:{default:100},menu_background_color:{default:"#F7F7FA"},switch_page_arr:{default:[]},use_menu:{default:!1},menu_border_width:{default:"2px"},menu_font_size:{default:"32px"},menu_checked_color:{default:"#58B7FF"},menu_border_color:{default:"#ddd"},menu_font_color:{default:"#999"}},methods:{switchMenuHandle:function(e,t){for(var n=0;n<this.switch_page_arr.length;n++){var e=this.switch_page_arr[n];n==t?(e.visibility="visible",e.checked=!0):(e.visibility="hidden",e.checked=!1)}this.$emit("switchMenu",e,t)}},components:{SwitchMenu:o}}},,function(e,t){e.exports={"switch-wrap":{flex:1},"switch-inner":{position:"absolute",width:750,left:0,right:0},"switch-content":{position:"absolute",top:0,left:0,right:0,bottom:0}}},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["switch-wrap"]},[n("switch-menu",{attrs:{use_menu:e.use_menu,menu_arr:e.switch_page_arr,menu_position:"top"==e.menu_position,menu_height:e.menu_height,menu_border_width:e.menu_border_width,menu_background_color:e.menu_background_color,menu_font_size:e.menu_font_size,menu_border_color:e.menu_border_color,menu_checked_color:e.menu_checked_color,menu_font_color:e.menu_font_color},on:{switchMenu:e.switchMenuHandle}},[e.use_menu?e._t("menu"):e._e()],2),n("div",{staticClass:["switch-inner"],style:{top:"top"==e.menu_position?100:0,bottom:"top"==e.menu_position?0:100}},e._l(e.switch_page_arr,function(e,t){return n("embed",{key:t,staticClass:["switch-content"],style:{visibility:e.visibility},attrs:{src:e.src,type:"weex"}})}))],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},,function(e,t,n){var o,r,i=[];i.push(n(1)),o=n(0);var s=n(2);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="F:\\workcode\\wov\\wov-ui\\src\\components\\switch\\children\\switch-menu.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-d17d05c8",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(24),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={data:function(){return{switch_page_arr:[{txt:"首页",visibility:"visible",img_src:"http://icon.nipic.com/BannerPic/20171009/original/20171009101241_1.jpg",checked:!0},{txt:"发现",visibility:"hidden",img_src:"http://icon.nipic.com/BannerPic/20171009/original/20171009101241_1.jpg",checked:!1},{txt:"留言",visibility:"hidden",img_src:"http://icon.nipic.com/BannerPic/20171009/original/20171009101241_1.jpg",checked:!1},{txt:"关于",visibility:"hidden",img_src:"http://icon.nipic.com/BannerPic/20171009/original/20171009101241_1.jpg",checked:!1}]}},components:{SwitchCom:r.default}}},,,,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("switch-com",{attrs:{switch_page_arr:e.switch_page_arr}})},staticRenderFns:[]},e.exports.render._withStripped=!0},,,function(e,t,n){var o,r,i=[];o=n(10);var s=n(17);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="F:\\workcode\\wov\\wov-ui\\src\\App.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},,,,function(e,t,n){var o,r,i=[];i.push(n(5)),o=n(3);var s=n(7);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="F:\\workcode\\wov\\wov-ui\\src\\components\\switch\\switch.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-4e029d95",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o}]);