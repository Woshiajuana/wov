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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(25)
	)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(27)
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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\packages\\wov-webview\\webview.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-01b3b502"
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

/***/ 25:
/***/ (function(module, exports) {

	module.exports = {
	  "webview-wrap": {
	    "flex": 1
	  },
	  "webview-inner": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 98
	  },
	  "webview-menu": {
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "height": 98,
	    "width": 750,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "backgroundColor": "#f5f5f9",
	    "borderTopWidth": 2,
	    "borderTopColor": "#dddddd",
	    "borderTopStyle": "solid"
	  },
	  "webview-menu-item": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "height": 98,
	    "width": 98
	  },
	  "webview-menu-item-icon": {
	    "width": 45,
	    "height": 45
	  }
	}

/***/ }),

/***/ 26:
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

	var webview = weex.requireModule('webview');
	var navigator = weex.requireModule('navigator');
	module.exports = {
	    data: function data() {
	        return {
	            page_count: 0
	        };
	    },

	    props: {
	        /**webview内容资源*/
	        web_src: { default: '' },
	        /**左边菜单资源*/
	        left_menu_src: { default: '' },
	        /**中间菜单资源*/
	        center_menu_src: { default: '' },
	        /**右边菜单资源*/
	        right_menu_src: { default: '' },
	        /**是否使用默认点击事件*/
	        use_left_event: { default: false },
	        use_center_event: { default: false },
	        use_right_event: { default: false }
	    },
	    methods: {
	        /**页面开始加载触发*/
	        pageStartHandle: function pageStartHandle() {
	            this.$emit('pageStart');
	        },

	        /**页面加载完成触发*/
	        pageFinishHandle: function pageFinishHandle() {
	            this.page_count += 1;
	            this.$emit('pageFinish');
	        },

	        /**页面加载失败触发*/
	        pageErrorHandle: function pageErrorHandle() {
	            this.$emit('pageError');
	        },

	        /**左边菜单点击事件*/
	        leftMenuClickHandle: function leftMenuClickHandle() {
	            var _this = this;

	            if (this.use_left_event) return this.$emit('leftMenuClick');
	            var page_count = this.page_count;
	            webview.goBack(this.$refs.webview);
	            setTimeout(function () {
	                if (page_count === _this.page_count) {
	                    return navigator.pop();
	                }
	            }, 200);
	        },

	        /**中间菜单点击事件*/
	        centerMenuClickHandle: function centerMenuClickHandle() {
	            this.use_center_event ? this.$emit('centerMenuClick') : webview.reload(this.$refs.webview);
	        },

	        /**右边菜单点击事件*/
	        rightMenuClickHandle: function rightMenuClickHandle() {
	            this.use_right_event ? this.$emit('rightMenuClick') : navigator.pop();
	        }
	    }
	};

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["webview-wrap"]
	  }, [_c('web', {
	    ref: "webview",
	    staticClass: ["webview-inner"],
	    attrs: {
	      "src": _vm.web_src
	    },
	    on: {
	      "pagestart": _vm.pageStartHandle,
	      "pagefinish": _vm.pageFinishHandle,
	      "error": _vm.pageErrorHandle
	    }
	  }), _c('div', {
	    staticClass: ["webview-menu"]
	  }, [_c('div', {
	    staticClass: ["webview-menu-item"],
	    on: {
	      "click": _vm.leftMenuClickHandle
	    }
	  }, [_c('image', {
	    staticClass: ["webview-menu-item-icon"],
	    attrs: {
	      "src": _vm.left_menu_src
	    }
	  })]), _c('div', {
	    staticClass: ["webview-menu-item"],
	    on: {
	      "click": _vm.centerMenuClickHandle
	    }
	  }, [_c('image', {
	    staticClass: ["webview-menu-item-icon"],
	    attrs: {
	      "src": _vm.center_menu_src
	    }
	  })]), _c('div', {
	    staticClass: ["webview-menu-item"],
	    on: {
	      "click": _vm.rightMenuClickHandle
	    }
	  }, [_c('image', {
	    staticClass: ["webview-menu-item-icon"],
	    attrs: {
	      "src": _vm.right_menu_src
	    }
	  })])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });