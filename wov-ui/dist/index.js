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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WovView = exports.WovSwitch = undefined;

	var _switch = __webpack_require__(3);

	var _switch2 = _interopRequireDefault(_switch);

	var _view = __webpack_require__(28);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.WovSwitch = _switch2.default;
	exports.WovView = _view2.default;

/***/ }),
/* 1 */,
/* 2 */,
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
	var __vue_template__ = __webpack_require__(12)
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _switchMenu = __webpack_require__(6);

	var _switchMenu2 = _interopRequireDefault(_switchMenu);

	var _page_url_config = __webpack_require__(10);

	var _page_url_config2 = _interopRequireDefault(_page_url_config);

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

	exports.default = {
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
	        SwitchMenu: _switchMenu2.default
	    }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(7)
	)

	/* script */
	__vue_exports__ = __webpack_require__(8)

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
/* 7 */
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
	  }
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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

	exports.default = {
	    props: ['switch_page_arr', 'menu_position', 'menu_height', 'menu_background_color', 'use_menu'],
	    methods: {
	        switchMenuHandle: function switchMenuHandle(item, index) {
	            this.$emit('switchMenu', item, index);
	        }
	    }
	};

/***/ }),
/* 9 */
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
	    }, [_c('text', {
	      staticClass: ["switch-menu-item-txt"],
	      style: {
	        color: item.checked ? '#58B7FF' : '#999999'
	      }
	    }, [_vm._v(_vm._s(item.txt))])]) : _vm._e()
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(11);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    'home': _config2.default.BASE_URL + 'home/Home.js',
	    'find': _config2.default.BASE_URL + 'find/Find.js',
	    'message': _config2.default.BASE_URL + 'message/Message.js',
	    'about': _config2.default.BASE_URL + 'about/About.js',
	    'search': _config2.default.BASE_URL + 'search/Search.js',
	    'webview': _config2.default.BASE_URL + 'webview/Webview.js',
	    'filter': _config2.default.BASE_URL + 'filter/Filter.js'
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by Administrator on 2017/9/5.
	 */
	var TYPE = true;
	exports.default = {
	  BASE_URL: TYPE ? 'http://192.170.2.151:13140/dist/views/' : 'http://www.owulia.com/ajuan/app/views/',
	  SOURCES_URL: TYPE ? 'http://192.170.2.151:13140/images/' : 'http://www.owulia.com/ajuan/app/images/'
	};

/***/ }),
/* 12 */
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
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
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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

	exports.default = {
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports) {

	module.exports = {
	  "view-wrap": {
	    "flex": 1
	  },
	  "view-inner": {
	    "position": "absolute",
	    "width": 750,
	    "left": 0,
	    "bottom": 0,
	    "backgroundColor": "#f5f5f5"
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _viewHeader = __webpack_require__(24);

	var _viewHeader2 = _interopRequireDefault(_viewHeader);

	var _navigator = __webpack_require__(25);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _source = __webpack_require__(26);

	var _source2 = _interopRequireDefault(_source);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        is_not_enabled_left_default_click: { default: false },
	        /**是否有头部*/
	        is_header: { default: true },
	        /**是否支持下拉刷新*/
	        is_refresh: { default: false },
	        /**是否支持上拉加载*/
	        is_load: { default: false },
	        /**导航条背景色*/
	        background_color: { default: '#FFFFFF' },
	        /**导航条高度*/
	        header_height: { default: 90 },
	        /**左侧按钮图片*/
	        left_item_img_src: { default: (0, _source2.default)('return-icon.png') },
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
	            this.is_not_enabled_left_default_click ? this.$emit('leftItemClick', event) : _navigator2.default.pop();
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
	        ViewHeader: _viewHeader2.default
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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(19)
	)

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(21)
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
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var navigator = weex.requireModule('navigator');
	exports.default = {
	    /**压入*/
	    push: function push(_ref, params) {
	        var url = _ref.url,
	            _ref$animated = _ref.animated,
	            animated = _ref$animated === undefined ? 'true' : _ref$animated,
	            _ref$close = _ref.close,
	            close = _ref$close === undefined ? '' : _ref$close;

	        close && (close = 'true');
	        url = params ? url + '?params=' + encodeURIComponent(JSON.stringify(params)) : url;
	        navigator.push({ url: url, animated: animated, close: close }, function (e) {});
	    },
	    /**弹出*/
	    pop: function pop() {
	        var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'true';

	        navigator.pop({ animated: animated });
	    },
	    /**获取参数*/
	    params: function params(weex) {
	        var bundleUrl = weex.$getConfig().bundleUrl;
	        var params = bundleUrl.substr(bundleUrl.indexOf("?params=") + 8);
	        return JSON.parse(decodeURIComponent(decodeURIComponent(params)));
	    }
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(11);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (source_name) {
	  return _config2.default.SOURCES_URL + source_name;
	}; /**
	    * Created by Administrator on 2017/8/28.
	    */

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["view-wrap"]
	  }, [(_vm.is_header) ? _c('view-header', {
	    attrs: {
	      "background_color": _vm.background_color,
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
	      top: _vm.is_header ? 90 : .1
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

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(22)
	)

	/* script */
	__vue_exports__ = __webpack_require__(23)

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


/***/ })
/******/ ]);