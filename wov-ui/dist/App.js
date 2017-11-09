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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\packages\\app.vue"
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

	var _wovView = __webpack_require__(2);

	var _wovView2 = _interopRequireDefault(_wovView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            return_src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2'
	        };
	    },

	    components: {
	        WovView: _wovView2.default
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(3);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(7)
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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\packages\\wov-view\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0ca09c82"
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
/* 4 */
/***/ (function(module, exports) {

	module.exports = {
	  "view-wrap": {
	    "flex": 1
	  },
	  "view-header": {
	    "position": "fixed",
	    "flexDirection": "row",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "view-header-right": {
	    "position": "absolute",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "top": 0,
	    "right": 0
	  },
	  "view-header-left": {
	    "position": "absolute",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "top": 0,
	    "left": 0
	  },
	  "view-header-center": {
	    "position": "absolute",
	    "flexDirection": "row",
	    "left": 120,
	    "right": 120,
	    "textAlign": "center",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "header-center-text": {
	    "fontSize": 34
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var navigator = weex.requireModule('navigator');
	exports.default = {
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
	        view_not_use_left_default_click: { default: _config2.default.view_not_use_left_default_click },
	        /**是否有头部*/
	        view_use_header: { default: _config2.default.view_use_header },
	        /**主体背景颜色*/
	        view_background_color: { default: _config2.default.view_background_color },
	        /**是否支持下拉刷新*/
	        view_use_refresh: { default: _config2.default.view_use_refresh },
	        /**是否支持上拉加载*/
	        view_use_load: { default: _config2.default.view_use_load },

	        /**导航条边框*/
	        view_header_border_width: { default: _config2.default.view_header_border_width },
	        view_header_border_color: { default: _config2.default.view_header_border_color },

	        /**导航条高度*/
	        view_header_height: { default: _config2.default.view_header_height },

	        /**下拉上拉背景色*/
	        view_refresh_load_background_color: { default: _config2.default.view_refresh_load_background_color },
	        /**指示器颜色*/
	        view_indicator_color: { default: _config2.default.view_indicator_color },
	        /**指示器背景颜色*/
	        view_indicator_background_color: { default: _config2.default.view_indicator_background_color },
	        /**字体颜色*/
	        view_load_done_color: { default: _config2.default.view_load_done_color },

	        /**头部背景色*/
	        view_header_background_color: { default: _config2.default.view_header_background_color },
	        view_header_background_image: { default: _config2.default.view_header_background_image },

	        /**头部左边图片样式定义*/
	        view_header_left_src: { default: _config2.default.view_header_left_src },
	        view_header_left_src_size: { default: _config2.default.view_header_left_src_size },
	        view_header_left_src_mar_left: { default: _config2.default.view_header_left_src_mar_left },
	        view_header_left_src_mar_right: { default: _config2.default.view_header_left_src_mar_right },
	        view_header_left_src_pad_left: { default: _config2.default.view_header_left_src_pad_left },
	        view_header_left_src_pad_right: { default: _config2.default.view_header_left_src_pad_right },

	        /**头部左边文字样式定义*/
	        view_header_left_txt: { default: _config2.default.view_header_left_txt },
	        view_header_left_color: { default: _config2.default.view_header_left_color },
	        view_header_left_size: { default: _config2.default.view_header_left_size },
	        view_header_left_txt_mar_left: { default: _config2.default.view_header_left_txt_mar_left },
	        view_header_left_txt_mar_right: { default: _config2.default.view_header_left_txt_mar_right },

	        /**头部中间图片样式样式定义*/
	        view_header_center_src: { default: _config2.default.view_header_center_src },
	        view_header_center_src_size: { default: _config2.default.view_header_center_src_size },
	        view_header_center_src_mar_left: { default: _config2.default.view_header_center_src_mar_left },
	        view_header_center_src_mar_right: { default: _config2.default.view_header_center_src_mar_right },
	        view_header_center_src_pad_left: { default: _config2.default.view_header_center_src_pad_left },
	        view_header_center_src_pad_right: { default: _config2.default.view_header_center_src_pad_right },

	        /**头部中间文字样式定义*/
	        view_header_center_txt: { default: _config2.default.view_header_center_txt },
	        view_header_center_size: { default: _config2.default.view_header_center_size },
	        view_header_center_color: { default: _config2.default.view_header_center_color },

	        /**头部右边图片样式定义*/
	        view_header_right_src: { default: _config2.default.view_header_right_src },
	        view_header_right_src_size: { default: _config2.default.view_header_right_src_size },
	        view_header_right_src_mar_left: { default: _config2.default.view_header_right_src_mar_left },
	        view_header_right_src_mar_right: { default: _config2.default.view_header_right_src_mar_right },
	        view_header_right_src_pad_left: { default: _config2.default.view_header_right_src_pad_left },
	        view_header_right_src_pad_right: { default: _config2.default.view_header_right_src_pad_right },

	        /**头部右边文字样式定义*/
	        view_header_right_txt: { default: _config2.default.view_header_right_txt },
	        view_header_right_size: { default: _config2.default.view_header_right_size },
	        view_header_right_color: { default: _config2.default.view_header_right_color },
	        view_header_right_txt_mar_left: { default: _config2.default.view_header_right_txt_mar_left },
	        view_header_right_txt_mar_right: { default: _config2.default.view_header_right_txt_mar_right }
	    },
	    methods: {
	        /**右边按钮点击事件*/
	        rightItemClickHandle: function rightItemClickHandle(event) {
	            this.$emit('rightItemClick', event);
	        },

	        /**左边按钮点击事件*/
	        leftItemClickHandle: function leftItemClickHandle(event) {
	            this.view_not_use_left_default_click ? this.$emit('leftItemClick', event) : navigator.pop();
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
	    }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by Administrator on 2017/11/8.
	 */
	exports.default = {

	    /**是否不启用默认点击事件*/
	    view_not_use_left_default_click: false,

	    /**是否有头部*/
	    view_use_header: true,

	    /**主体背景颜色*/
	    view_background_color: '#fff',

	    /**是否支持下拉刷新*/
	    view_use_refresh: false,

	    /**是否支持上拉加载*/
	    view_use_load: false,

	    /**导航条边框*/
	    view_header_border_width: 0,
	    view_header_border_color: '#ddd',

	    /**导航条高度*/
	    view_header_height: 90,

	    /**下拉上拉背景色*/
	    view_refresh_load_background_color: '#383838',

	    /**指示器颜色*/
	    view_indicator_color: '#58B7FF',

	    /**指示器背景颜色*/
	    view_indicator_background_color: '#FFFFFF',

	    /**字体颜色*/
	    view_load_done_color: '#FFFFFF',

	    /**头部背景色*/
	    view_header_background_color: '#fdfdfd',
	    view_header_background_image: '',

	    /**头部左边图片样式定义*/
	    view_header_left_src: '',
	    view_header_left_src_size: [40, 40],
	    view_header_left_src_mar_left: 25,
	    view_header_left_src_mar_right: 0,
	    view_header_left_src_pad_left: 0,
	    view_header_left_src_pad_right: 0,

	    /**头部左边文字样式定义*/
	    view_header_left_txt: '',
	    view_header_left_color: '#3c3c3c',
	    view_header_left_size: 30,
	    view_header_left_txt_mar_left: 25,
	    view_header_left_txt_mar_right: 0,

	    /**头部中间图片样式样式定义*/
	    view_header_center_src: '',
	    view_header_center_src_size: [40, 40],
	    view_header_center_src_mar_left: 0,
	    view_header_center_src_mar_right: 0,
	    view_header_center_src_pad_left: 0,
	    view_header_center_src_pad_right: 0,

	    /**头部中间文字样式定义*/
	    view_header_center_txt: '',
	    view_header_center_size: 30,
	    view_header_center_color: '#3c3c3c',

	    /**头部右边图片样式定义*/
	    view_header_right_src: '',
	    view_header_right_src_size: [40, 40],
	    view_header_right_src_mar_left: 0,
	    view_header_right_src_mar_right: 25,
	    view_header_right_src_pad_left: 0,
	    view_header_right_src_pad_right: 0,

	    /**头部右边文字样式定义*/
	    view_header_right_txt: '',
	    view_header_right_size: 30,
	    view_header_right_color: '#3c3c3c',
	    view_header_right_txt_mar_left: 0,
	    view_header_right_txt_mar_right: 25

	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["view-wrap"]
	  }, [(_vm.view_use_header) ? _c('div', {
	    staticClass: ["view-header"],
	    style: {
	      height: _vm.view_header_height,
	      backgroundColor: _vm.view_header_background_color,
	      backgroundImage: _vm.view_header_background_image,
	      borderBottomColor: _vm.view_header_border_color,
	      borderBottomWidth: _vm.view_header_border_width
	    }
	  }, [_c('div', {
	    staticClass: ["view-header-left"],
	    style: {
	      height: _vm.view_header_height
	    },
	    on: {
	      "click": _vm.leftItemClickHandle
	    }
	  }, [(_vm.view_header_left_src) ? _c('image', {
	    staticClass: ["header-left-image"],
	    style: {
	      width: _vm.view_header_left_src_size[0] + _vm.view_header_left_src_pad_left + _vm.view_header_left_src_pad_right,
	      marginLeft: _vm.view_header_left_src_mar_left,
	      marginRight: _vm.view_header_left_src_mar_right,
	      paddingLeft: _vm.view_header_left_src_pad_left,
	      paddingRight: _vm.view_header_left_src_pad_right,
	      height: _vm.view_header_left_src_size[1]
	    },
	    attrs: {
	      "src": _vm.view_header_left_src
	    }
	  }) : _vm._e(), (_vm.view_header_left_txt) ? _c('text', {
	    staticClass: ["header-left-text"],
	    style: {
	      color: _vm.view_header_left_color,
	      fontSize: _vm.view_header_left_size,
	      marginLeft: _vm.view_header_left_txt_mar_left,
	      marginRight: _vm.view_header_left_txt_mar_right
	    }
	  }, [_vm._v(_vm._s(_vm.view_header_left_txt))]) : _vm._e()]), _c('div', {
	    staticClass: ["view-header-center"],
	    style: {
	      height: _vm.view_header_height
	    }
	  }, [_c('text', {
	    staticClass: ["header-center-text"],
	    style: {
	      color: _vm.view_header_center_color,
	      fontSize: _vm.view_header_center_size
	    }
	  }, [_vm._v(_vm._s(_vm.view_header_center_txt))]), (_vm.view_header_center_src) ? _c('image', {
	    staticClass: ["header-center-image"],
	    style: {
	      width: _vm.view_header_center_src_size[0] + _vm.view_header_center_src_pad_left + _vm.view_header_center_src_pad_right,
	      marginLeft: _vm.view_header_center_src_mar_left,
	      marginRight: _vm.view_header_center_src_mar_right,
	      paddingLeft: _vm.view_header_center_src_pad_left,
	      paddingRight: _vm.view_header_center_src_pad_right,
	      height: _vm.view_header_center_src_size[1]
	    },
	    attrs: {
	      "src": _vm.view_header_center_src
	    }
	  }) : _vm._e()]), _c('div', {
	    staticClass: ["view-header-right"],
	    style: {
	      height: _vm.view_header_height
	    },
	    on: {
	      "click": _vm.rightItemClickHandle
	    }
	  }, [(_vm.view_header_right_txt) ? _c('text', {
	    staticClass: ["header-right-text"],
	    style: {
	      color: _vm.view_header_right_color,
	      fontSize: _vm.view_header_right_size,
	      marginLeft: _vm.view_header_right_txt_mar_left,
	      marginRight: _vm.view_header_right_txt_mar_right
	    }
	  }, [_vm._v(_vm._s(_vm.view_header_right_txt))]) : _vm._e(), (_vm.view_header_right_src) ? _c('image', {
	    staticClass: ["header-right-image"],
	    style: {
	      width: _vm.view_header_right_src_size[0] + _vm.view_header_right_src_pad_left + _vm.view_header_right_src_pad_right,
	      marginLeft: _vm.view_header_right_src_mar_left,
	      marginRight: _vm.view_header_right_src_mar_right,
	      paddingLeft: _vm.view_header_right_src_pad_left,
	      paddingRight: _vm.view_header_right_src_pad_right,
	      height: _vm.view_header_right_src_size[1]
	    },
	    attrs: {
	      "src": _vm.view_header_right_src
	    }
	  }) : _vm._e()])]) : _vm._e(), _c('scroller', {
	    staticClass: ["view-inner"],
	    style: {
	      top: _vm.view_use_header ? _vm.view_header_height : 0.1,
	      backgroundColor: _vm.view_background_color
	    }
	  }, [(_vm.view_use_refresh) ? _c('refresh', {
	    staticClass: ["view-refresh"],
	    style: {
	      backgroundColor: _vm.view_refresh_load_background_color
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
	      color: _vm.view_indicator_color,
	      backgroundColor: _vm.view_indicator_background_color
	    }
	  }) : _vm._e()], 1) : _vm._e(), _vm._t("default"), (_vm.view_use_load) ? _c('loading', {
	    staticClass: ["view-loading"],
	    style: {
	      backgroundColor: _vm.view_refresh_load_background_color
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
	      color: _vm.view_indicator_color,
	      backgroundColor: _vm.view_indicator_background_color
	    }
	  }), (!_vm.is_load_type) ? _c('text', {
	    staticClass: ["view-loading-text"],
	    style: {
	      color: _vm.view_load_done_color
	    }
	  }, [_vm._v("没有更多了")]) : _vm._e()], 1) : _vm._e()], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('wov-view', {
	    attrs: {
	      "view_header_left_src": _vm.return_src,
	      "view_header_right_src": _vm.return_src,
	      "view_header_center_txt": "哈哈"
	    }
	  }, [_c('text', [_vm._v("xxxx")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);