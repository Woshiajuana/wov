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
	__vue_styles__.push(__webpack_require__(19)
	)

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(22)
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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\src\\components\\view\\view.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-292a4eb5"
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
/* 16 */
/***/ (function(module, exports) {

	module.exports = {
	  "view-header": {
	    "position": "fixed",
	    "flexDirection": "row",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750,
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#e5e5e5"
	  },
	  "view-header-right": {
	    "position": "absolute",
	    "flexDirection": "row",
	    "top": 0,
	    "height": 88,
	    "right": 0
	  },
	  "view-header-left": {
	    "position": "absolute",
	    "flexDirection": "row",
	    "top": 0,
	    "height": 88,
	    "left": 0
	  },
	  "header-right-text": {
	    "top": 28,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "textAlign": "right",
	    "fontSize": 30,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "header-left-text": {
	    "top": 28,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "textAlign": "right",
	    "fontSize": 30,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "header-center-text": {
	    "position": "absolute",
	    "height": 88,
	    "left": 120,
	    "right": 120,
	    "lineHeight": 88,
	    "textAlign": "center",
	    "fontSize": 34,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "header-left-image": {
	    "top": 25,
	    "width": 90,
	    "height": 40,
	    "paddingRight": 25,
	    "paddingLeft": 25
	  },
	  "header-right-image": {
	    "top": 25,
	    "width": 90,
	    "height": 40,
	    "paddingRight": 25,
	    "paddingLeft": 25
	  }
	}

/***/ }),
/* 17 */
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

	module.exports = {
	    props: ['background_color', 'header_height', 'left_item_img_src', 'left_item_title', 'left_item_color', 'center_item_title', 'center_item_color', 'right_item_img_src', 'right_item_title', 'right_item_color'],
	    methods: {
	        /**右边按钮点击事件*/
	        rightItemClickHandle: function rightItemClickHandle(event) {
	            this.$emit('rightItemClick', event);
	        },

	        /**左边按钮点击事件*/
	        leftItemClickHandle: function leftItemClickHandle(event) {
	            this.$emit('leftItemClick', event);
	        }
	    }
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["view-header"],
	    style: {
	      height: _vm.header_height,
	      backgroundColor: _vm.background_color
	    }
	  }, [_c('div', {
	    staticClass: ["view-header-left"],
	    on: {
	      "click": _vm.leftItemClickHandle
	    }
	  }, [(_vm.left_item_img_src) ? _c('image', {
	    staticClass: ["header-left-image"],
	    attrs: {
	      "src": _vm.left_item_img_src,
	      "resize": "cover"
	    }
	  }) : _vm._e(), (_vm.left_item_title) ? _c('text', {
	    staticClass: ["header-left-text"],
	    style: {
	      color: _vm.left_item_color
	    }
	  }, [_vm._v(_vm._s(_vm.left_item_title))]) : _vm._e()]), _c('text', {
	    staticClass: ["header-center-text"],
	    style: {
	      color: _vm.center_item_color
	    }
	  }, [_vm._v(_vm._s(_vm.center_item_title))]), _c('div', {
	    staticClass: ["view-header-right"],
	    on: {
	      "click": _vm.rightItemClickHandle
	    }
	  }, [(_vm.right_item_title) ? _c('text', {
	    staticClass: ["header-right-text"],
	    style: {
	      color: _vm.right_item_color
	    }
	  }, [_vm._v(_vm._s(_vm.right_item_title))]) : _vm._e(), (_vm.right_item_img_src) ? _c('image', {
	    staticClass: ["header-right-image"],
	    attrs: {
	      "src": _vm.right_item_img_src,
	      "resize": "cover"
	    }
	  }) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = {
	  "view-wrap": {
	    "flex": 1
	  },
	  "view-inner": {
	    "position": "absolute",
	    "width": 750,
	    "left": 0,
	    "bottom": 0
	  },
	  "view-refresh": {
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 100,
	    "lineHeight": 100
	  },
	  "view-loading": {
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 100,
	    "lineHeight": 100
	  },
	  "view-refresh-icon": {
	    "width": 50,
	    "height": 50,
	    "borderRadius": 50,
	    "marginBottom": 25
	  },
	  "view-loading-icon": {
	    "width": 50,
	    "height": 50,
	    "borderRadius": 50
	  },
	  "view-loading-text": {
	    "fontSize": 24
	  }
	}

/***/ }),
/* 20 */
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

	var ViewHeader = __webpack_require__(21);
	var navigator = weex.requireModule('navigator');
	module.exports = {
	    data: function data() {
	        return {
	            /**下拉状态*/
	            is_refresh_status: false,
	            /**上拉状态*/
	            is_load_status: false,
	            /**是否可以上拉*/
	            is_load_type: true,
	            /**是否可以下拉*/
	            is_refresh_type: true
	        };
	    },

	    props: {
	        /**是否不启用默认点击事件*/
	        is_not_enabled_left_default_click: { default: false },
	        /**是否有头部*/
	        is_header: { default: true },
	        /**主体背景颜色*/
	        background_color: { default: '' },
	        /**是否支持下拉刷新*/
	        is_refresh: { default: false },
	        /**是否支持上拉加载*/
	        is_load: { default: false },
	        /**导航条背景色*/
	        nav_background_color: { default: '#FFFFFF' },
	        /**导航条高度*/
	        header_height: { default: 90 },
	        /**左侧按钮图片*/
	        left_item_img_src: { default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAf1JREFUWAntmL0rRlEcx72EWEjKS0oUKRZZTAZllEUWI4NBmQwmJhkMLAZZGBgMKCv5AwyKEkVKSSjvkffPt/x0O930yNNzTnp+9e2c873POb/P/d3z3HufJyMjHekK/I8KFHAai+gOraJ8FEwIZh19RDSQLLqsPy6Ux/wV1OasI1jvkQvBGopWTv0t5P0S5wChyrlw23jFyGtkk30JuXA7eCVeyUiuPbuAXLg9vFLkNQQ3h1y4A7xyr2Qkz0SzyIU7xKtE3mMaAhfuGK/KOxkAU8iFO8GrCQFuIgbuFK82BLixGLgzvPoQ4EZj4C7wGlINp2+nG4MYk46pPfj25bn7UWOF6yfqRee/MGkT9aMHFBt6ZXKTpXo8bGS6+bpx4xoexoU/5Wzm4DVKddUs3y65Kwwwbg/qWBHaQE0aRGKZfg/SftRcE93v/k+e5bPPWGvzte6lBomE3kx0NnZm1s7jxW2NRNZM+mfKWHEfGZy1M3hWjaQn/e2Cehk4QgZnrR6BwUQ1JHr+Gpy148EQAlKH9KgzOGtHQoJsBEbfMoOzdigkSN16rmIgB0KCbAHm1oF8Z9wbEmQrMHqg22VWqxutbuTBRDskTygK+cq4MxhCQDrQM4pCnocEKJYupMoZ5D19/cAPKrqh0VvQI+oLiiwCo6rpf5t0pCuQaAU+AQjE6XRPS3R6AAAAAElFTkSuQmCC' },
	        /**左侧按钮标题*/
	        left_item_title: { default: '' },
	        /**左侧按钮颜色*/
	        left_item_color: { default: '#000000' },
	        /**导航条标题*/
	        center_item_title: { default: '' },
	        /**导航条标题颜色*/
	        center_item_color: { default: '#000000' },
	        /**右侧按钮图片*/
	        right_item_img_src: { default: '' },
	        /**右侧按钮标题*/
	        right_item_title: { default: '' },
	        /**右侧按钮标题颜色*/
	        right_item_color: { default: '#000000' },
	        /**下拉上拉背景色*/
	        refresh_load_background_color: { default: '#383838' },
	        /**指示器颜色*/
	        indicator_color: { default: '#58B7FF' },
	        /**指示器背景颜色*/
	        indicator_background_color: { default: '#FFFFFF' },
	        /**字体颜色*/
	        load_done_color: { default: '#FFFFFF' }
	    },
	    methods: {
	        /**右边按钮点击事件*/
	        rightItemClickHandle: function rightItemClickHandle(event) {
	            this.$emit('rightItemClick', event);
	        },

	        /**左边按钮点击事件*/
	        leftItemClickHandle: function leftItemClickHandle(event) {
	            this.is_not_enabled_left_default_click ? this.$emit('leftItemClick', event) : navigator.pop();
	        },

	        /**上拉加载数据*/
	        loadHandle: function loadHandle(event) {
	            this.is_load_status = true;
	            this.is_load_type && this.$emit('load', event);
	            !this.is_load_type && setTimeout(this.loaded, 0);
	        },

	        /**下拉刷新数据*/
	        refreshHandle: function refreshHandle(event) {
	            this.is_refresh_status = true;
	            this.is_refresh_type && this.$emit('refresh', event);
	            !this.is_refresh_type && setTimeout(this.refreshed, 0);
	        },

	        /**下拉距离*/
	        pullingDownHandle: function pullingDownHandle(event) {
	            this.$emit('pullingDown', event);
	        },

	        /**上拉距离*/
	        pullingUpHandle: function pullingUpHandle(event) {
	            this.$emit('pullingUp', event);
	        },

	        /**重置状态*/
	        resetStatus: function resetStatus() {
	            this.is_load_status = false;
	            this.is_refresh_status = false;
	        },

	        /**上拉完成*/
	        loaded: function loaded() {
	            this.is_load_status = false;
	        },

	        /**下拉完成*/
	        refreshed: function refreshed() {
	            this.is_refresh_status = false;
	        },

	        /**禁止上拉*/
	        banLoad: function banLoad() {
	            this.is_load_type = false;
	        },

	        /**恢复上拉*/
	        regainLoad: function regainLoad() {
	            this.is_load_type = true;
	        },

	        /**禁止下拉*/
	        banRefresh: function banRefresh() {
	            this.is_refresh_type = false;
	        },

	        /**恢复下拉*/
	        regainRefresh: function regainRefresh() {
	            this.is_refresh_type = true;
	        }
	    },
	    components: {
	        ViewHeader: ViewHeader
	    }
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(16)
	)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(18)
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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\src\\components\\view\\children\\view-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-dd82d230"
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
/* 22 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["view-wrap"]
	  }, [(_vm.is_header) ? _c('view-header', {
	    attrs: {
	      "background_color": _vm.nav_background_color,
	      "header_height": _vm.header_height,
	      "left_item_img_src": _vm.left_item_img_src,
	      "left_item_title": _vm.left_item_title,
	      "left_item_color": _vm.left_item_color,
	      "center_item_title": _vm.center_item_title,
	      "center_item_color": _vm.center_item_color,
	      "right_item_img_src": _vm.right_item_img_src,
	      "right_item_title": _vm.right_item_title,
	      "right_item_color": _vm.right_item_color
	    },
	    on: {
	      "rightItemClick": _vm.rightItemClickHandle,
	      "leftItemClick": _vm.leftItemClickHandle
	    }
	  }) : _vm._e(), _c('scroller', {
	    staticClass: ["view-inner"],
	    style: {
	      top: _vm.is_header ? 90 : 0,
	      backgroundColor: _vm.background_color
	    }
	  }, [(_vm.is_refresh) ? _c('refresh', {
	    staticClass: ["view-refresh"],
	    style: {
	      backgroundColor: _vm.refresh_load_background_color
	    },
	    attrs: {
	      "display": _vm.is_refresh_status ? 'show' : 'hide'
	    },
	    on: {
	      "refresh": _vm.refreshHandle,
	      "pullingdown": _vm.pullingDownHandle
	    }
	  }, [(_vm.is_refresh_type) ? _c('loading-indicator', {
	    staticClass: ["view-refresh-icon"],
	    style: {
	      visibility: _vm.is_refresh_type ? 'visible' : 'hidden',
	      color: _vm.indicator_color,
	      backgroundColor: _vm.indicator_background_color
	    }
	  }) : _vm._e()], 1) : _vm._e(), _vm._t("default"), (_vm.is_load) ? _c('loading', {
	    staticClass: ["view-loading"],
	    style: {
	      backgroundColor: _vm.refresh_load_background_color
	    },
	    attrs: {
	      "display": _vm.is_load_status ? 'show' : 'hide'
	    },
	    on: {
	      "loading": _vm.loadHandle,
	      "pullingup": _vm.pullingUpHandle
	    }
	  }, [_c('loading-indicator', {
	    staticClass: ["view-loading-icon"],
	    style: {
	      visibility: _vm.is_load_type ? 'visible' : 'hidden',
	      color: _vm.indicator_color,
	      backgroundColor: _vm.indicator_background_color
	    }
	  }), (!_vm.is_load_type) ? _c('text', {
	    staticClass: ["view-loading-text"],
	    style: {
	      color: _vm.load_done_color
	    }
	  }, [_vm._v("没有更多了")]) : _vm._e()], 1) : _vm._e()], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);