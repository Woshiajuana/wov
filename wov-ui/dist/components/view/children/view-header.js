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
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 19:
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

/***/ 20:
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

/***/ 21:
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

/***/ })

/******/ });