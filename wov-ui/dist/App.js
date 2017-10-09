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

	/* script */
	__vue_exports__ = __webpack_require__(1)

	/* template */
	var __vue_template__ = __webpack_require__(10)
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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\src\\App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _switch = __webpack_require__(2);

	var _switch2 = _interopRequireDefault(_switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            switch_page_arr: [{
	                txt: '首页',
	                visibility: 'visible',
	                checked: true
	            }, {
	                txt: '发现',
	                visibility: 'hidden',
	                checked: false
	            }, {
	                txt: '留言',
	                visibility: 'hidden',
	                checked: false
	            }, {
	                txt: '关于',
	                visibility: 'hidden',
	                checked: false
	            }]
	        };
	    },

	    methods: {
	        /**切换导航菜单*/
	        switchMenuHandle: function switchMenuHandle(index) {
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
	        }
	    },
	    components: {
	        SwitchCom: _switch2.default
	    }
	}; //
	//
	//
	//
	//
	//

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(3)
	)

	/* script */
	__vue_exports__ = __webpack_require__(4)

	/* template */
	var __vue_template__ = __webpack_require__(9)
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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\src\\components\\switch\\switch.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4e029d95"
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
/* 3 */
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
/* 4 */
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

	var SwitchMenu = __webpack_require__(5);
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
	        use_menu: { default: false }
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(6)
	)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\src\\components\\switch\\children\\switch-menu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d17d05c8"
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
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
	  "switch-menu-wrap": {
	    "position": "absolute",
	    "left": 0,
	    "width": 750,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderTopWidth": 1,
	    "borderTopColor": "#c0bfc4",
	    "borderTopStyle": "solid",
	    "borderBottomColor": "#c0bfc4",
	    "borderBottomStyle": "solid"
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
	    "alignItems": "center"
	  },
	  "switch-menu-item-txt": {
	    "fontSize": 28,
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
/* 7 */
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

	module.exports = {
	    props: ['switch_page_arr', 'menu_position', 'menu_height', 'menu_background_color', 'use_menu'],
	    methods: {
	        switchMenuHandle: function switchMenuHandle(item, index) {
	            this.$emit('switchMenu', item, index);
	        }
	    }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["switch-menu-wrap"],
	    class: [_vm.menu_position ? 'top' : 'bottom'],
	    style: {
	      height: _vm.menu_height,
	      borderTopWidth: _vm.menu_position ? 0 : 1,
	      borderBottomWidth: _vm.menu_position ? 1 : 0,
	      backgroundColor: _vm.menu_background_color
	    }
	  }, [(_vm.use_menu) ? _vm._t("default") : _vm._e(), _vm._l((_vm.switch_page_arr), function(item, index) {
	    return (!_vm.use_menu) ? _c('div', {
	      key: index,
	      staticClass: ["switch-menu-item"],
	      on: {
	        "click": function($event) {
	          _vm.switchMenuHandle(item, index)
	        }
	      }
	    }, [(item.img_src) ? _c('image', {
	      staticClass: ["switch-menu-item-img"],
	      attrs: {
	        "src": item.checked ? item.img_checked_src : item.img_src
	      }
	    }) : _vm._e(), _c('text', {
	      staticClass: ["switch-menu-item-txt"],
	      style: {
	        color: item.checked ? '#58B7FF' : '#999999'
	      }
	    }, [_vm._v(_vm._s(item.txt))])]) : _vm._e()
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["switch-wrap"]
	  }, [_c('switch-menu', {
	    attrs: {
	      "use_menu": _vm.use_menu,
	      "switch_page_arr": _vm.switch_page_arr,
	      "menu_position": _vm.menu_position == 'top' ? true : false,
	      "menu_height": _vm.menu_height,
	      "menu_background_color": _vm.menu_background_color
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('switch-com', {
	    attrs: {
	      "switch_page_arr": _vm.switch_page_arr
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);