// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(21)
	)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\packages\\wov-switch\\switch.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c26b66f6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	module.exports = {
	  "switch-menu-wrap": {
	    "position": "absolute",
	    "left": 0,
	    "width": 750,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "top": {
	    "top": 0
	  },
	  "bottom": {
	    "bottom": 0
	  },
	  "switch-menu-item": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderBottomStyle": "solid",
	    "borderTopStyle": "solid"
	  },
	  "switch-menu-item-txt": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "switch-menu-item-img": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 44,
	    "height": 44
	  }
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: ['menu_arr', 'menu_position', 'menu_height', 'menu_background_color', 'use_menu', 'menu_border_width', 'menu_font_size', 'menu_checked_color', 'menu_border_color', 'menu_font_color'],
	    methods: {
	        switchMenuHandle: function switchMenuHandle(item, index) {
	            this.$emit('switchMenu', item, index);
	        }
	    }
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["switch-menu-wrap"],
	    class: [_vm.menu_position ? 'top' : 'bottom'],
	    style: {
	      height: _vm.menu_height,
	      backgroundColor: _vm.menu_background_color
	    }
	  }, [(_vm.use_menu) ? _vm._t("default") : _vm._e(), _vm._l((_vm.menu_arr), function(item, index) {
	    return (!_vm.use_menu) ? _c('div', {
	      key: index,
	      staticClass: ["switch-menu-item"],
	      style: {
	        height: _vm.menu_height,
	        borderTopWidth: item.img_src ? (_vm.menu_position ? 0 : _vm.menu_border_width) : (_vm.menu_position ? 0 : _vm.menu_border_width),
	        borderBottomWidth: item.img_src ? (_vm.menu_position ? _vm.menu_border_width : 0) : (_vm.menu_position ? _vm.menu_border_width : 0),
	        borderTopColor: item.img_src ? _vm.menu_border_color : (item.checked ? _vm.menu_checked_color : _vm.menu_border_color),
	        borderBottomColor: item.img_src ? _vm.menu_border_color : (item.checked ? _vm.menu_checked_color : _vm.menu_border_color)
	      },
	      on: {
	        "click": function($event) {
	          _vm.switchMenuHandle(item, index)
	        }
	      }
	    }, [(item.img_src) ? _c('image', {
	      staticClass: ["switch-menu-item-img"],
	      attrs: {
	        "src": item.checked ? (item.img_checked_src || item.img_src) : item.img_src
	      }
	    }) : _vm._e(), _c('text', {
	      staticClass: ["switch-menu-item-txt"],
	      style: {
	        color: item.checked ? _vm.menu_checked_color : _vm.menu_font_color,
	        fontSize: item.img_src ? '22px' : _vm.menu_font_size
	      }
	    }, [_vm._v(_vm._s(item.txt))])]) : _vm._e()
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = {
	  "switch-wrap": {
	    "flex": 1
	  },
	  "switch-inner": {
	    "position": "absolute",
	    "width": 750,
	    "left": 0,
	    "right": 0
	  },
	  "switch-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  }
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var SwitchMenu = __webpack_require__(23);
	module.exports = {
	    props: {
	        /**菜单位置*/
	        menu_position: { default: 'bottom' },
	        /**菜单高度*/
	        menu_height: { default: 100 },
	        /**菜单颜色*/
	        menu_background_color: { default: '#F7F7FA' },
	        /**内容*/
	        switch_page_arr: { default: [] },
	        /**是否有默认*/
	        use_menu: { default: false },
	        /**菜单响应状态*/
	        menu_border_width: { default: '2px' },
	        /**菜单字体大小*/
	        menu_font_size: { default: '32px' },
	        /**菜单字体颜色*/
	        menu_checked_color: { default: '#58B7FF' },
	        /**边框的颜色*/
	        menu_border_color: { default: '#ddd' },
	        /**菜单字体颜色*/
	        menu_font_color: { default: '#999' }
	    },
	    methods: {
	        /**切换菜单*/
	        switchMenuHandle: function switchMenuHandle(item, index) {
	            for (var i = 0; i < this.switch_page_arr.length; i++) {
	                var item = this.switch_page_arr[i];
	                if (i == index) {
	                    item.visibility = 'visible';
	                    item.checked = true;
	                } else {
	                    item.visibility = 'hidden';
	                    item.checked = false;
	                }
	            }
	            this.$emit('switchMenu', item, index);
	        }
	    },
	    components: {
	        SwitchMenu: SwitchMenu
	    }
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(18)
	)

	/* script */
	__vue_exports__ = __webpack_require__(19)

	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\packages\\wov-switch\\children\\switch-menu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-40976fe8"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["switch-wrap"]
	  }, [_c('switch-menu', {
	    attrs: {
	      "use_menu": _vm.use_menu,
	      "menu_arr": _vm.switch_page_arr,
	      "menu_position": _vm.menu_position == 'top' ? true : false,
	      "menu_height": _vm.menu_height,
	      "menu_border_width": _vm.menu_border_width,
	      "menu_background_color": _vm.menu_background_color,
	      "menu_font_size": _vm.menu_font_size,
	      "menu_border_color": _vm.menu_border_color,
	      "menu_checked_color": _vm.menu_checked_color,
	      "menu_font_color": _vm.menu_font_color
	    },
	    on: {
	      "switchMenu": _vm.switchMenuHandle
	    }
	  }, [(_vm.use_menu) ? _vm._t("menu") : _vm._e()], 2), _c('div', {
	    staticClass: ["switch-inner"],
	    style: {
	      top: _vm.menu_position == 'top' ? 100 : 0,
	      bottom: _vm.menu_position == 'top' ? 0 : 100
	    }
	  }, _vm._l((_vm.switch_page_arr), function(item, index) {
	    return _c('embed', {
	      key: index,
	      staticClass: ["switch-content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);