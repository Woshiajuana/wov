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
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
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
	__vue_options__.__file = "F:\\workcode\\wov\\wov-ui\\src\\components\\item\\item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-55a1f916"
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

/***/ 13:
/***/ (function(module, exports) {

	module.exports = {
	  "item-wrap": {
	    "backgroundColor": "#ffffff"
	  },
	  "item-inner": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "item-arrow": {
	    "width": 24,
	    "height": 24,
	    "marginRight": 10,
	    "marginLeft": 10,
	    "borderTopWidth": 3,
	    "borderTopStyle": "solid",
	    "borderRightWidth": 3,
	    "borderRightStyle": "solid",
	    "transform": "rotate(45deg)"
	  },
	  "item-right-img": {
	    "marginLeft": 10
	  },
	  "item-left-img": {
	    "marginRight": 10
	  },
	  "item-right": {
	    "flex": 1
	  }
	}

/***/ }),

/***/ 14:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    name: 'item',
	    props: {
	        /**高度*/
	        height: { default: 90 },
	        /**左边宽度*/
	        left_width: { default: 120 },
	        /**左边文案*/
	        left_text: { default: '左边' },
	        /**左边文案对齐方式*/
	        left_text_align: { default: 'left' },
	        /**左边文案颜色*/
	        left_text_color: { default: '#333' },
	        /**左边文案字体大小*/
	        left_text_size: { default: 28 },
	        /**右边文案*/
	        right_text: { default: '右边' },
	        /**右边文案颜色*/
	        right_text_color: { default: '#333' },
	        /**右边文案对齐方式*/
	        right_text_align: { default: 'right' },
	        /**右边文案字体大小*/
	        right_text_size: { default: 28 },
	        /**距离左边宽度*/
	        padding_left: { default: 20 },
	        /**距离右边宽度*/
	        padding_right: { default: 0 },
	        /**边框宽度*/
	        border_bottom_width: { default: 1 },
	        /**边框颜色*/
	        border_bottom_color: { default: '#ddd' },
	        /**边框宽度*/
	        border_bottom_style: { default: 'solid' },
	        /**是否是输入框*/
	        is_input: { default: false },
	        /**输入框类型*/
	        input_type: { default: 'text' },
	        /**输入最大值*/
	        input_max_length: { default: 11 },
	        /**输入框提示预览*/
	        is_placeholder: { default: '请输入' },
	        /**是否需要右边icon*/
	        is_arrow: { default: true },
	        /**是否需要右边icon*/
	        is_arrow_color: { default: '#999999' },
	        /**左边图片*/
	        left_img_src: { default: '' },
	        /**左边图片宽*/
	        left_img_width_and_height: { default: [40, 40] },
	        /**右边图片*/
	        right_img_src: { default: '' },
	        /**右边图片宽*/
	        right_img_width_and_height: { default: [40, 40] }
	    },
	    data: function data() {
	        return {
	            input_value: ''
	        };
	    },
	    created: function created() {
	        this.input_value = this.right_text;
	    },

	    methods: {
	        /**点击事件*/
	        pressHandle: function pressHandle(event) {
	            this.$emit('onPress', event);
	        },
	        inputHandle: function inputHandle() {
	            this.$emit('inputChange', this.input_value);
	        }
	    }
	};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["item-wrap"],
	    style: {
	      height: _vm.height,
	      paddingLeft: _vm.padding_left,
	      paddingRight: _vm.padding_right
	    },
	    on: {
	      "click": _vm.pressHandle
	    }
	  }, [_c('div', {
	    staticClass: ["item-inner", "item-inner-arrow"],
	    style: {
	      borderBottomWidth: _vm.border_bottom_width,
	      borderBottomColor: _vm.border_bottom_color,
	      borderBottomStyle: _vm.border_bottom_style,
	      paddingRight: _vm.padding_left
	    }
	  }, [(_vm.left_img_src) ? _c('image', {
	    staticClass: ["item-left-img"],
	    style: {
	      width: _vm.left_img_width_and_height[0],
	      height: _vm.left_img_width_and_height[1]
	    },
	    attrs: {
	      "src": _vm.left_img_src
	    }
	  }) : _vm._e(), _c('text', {
	    staticClass: ["item-text", "item-left"],
	    style: {
	      width: _vm.left_width,
	      color: _vm.left_text_color,
	      fontSize: _vm.left_text_size,
	      textAlign: _vm.left_text_align
	    }
	  }, [_vm._v(_vm._s(_vm.left_text))]), (!_vm.is_input) ? _c('text', {
	    staticClass: ["item-text", "item-right"],
	    style: {
	      width: _vm.left_width,
	      color: _vm.right_text_color,
	      fontSize: _vm.right_text_size,
	      textAlign: _vm.right_text_align
	    }
	  }, [_vm._v(_vm._s(_vm.right_text))]) : _vm._e(), (_vm.is_input) ? _c('input', {
	    staticClass: ["item-text", "item-right"],
	    style: {
	      width: _vm.left_width,
	      color: _vm.right_text_color,
	      fontSize: _vm.right_text_size,
	      textAlign: _vm.right_text_align
	    },
	    attrs: {
	      "placeholder": _vm.is_placeholder,
	      "value": _vm.input_value,
	      "maxlength": _vm.input_max_length,
	      "type": _vm.input_type
	    },
	    on: {
	      "input": _vm.inputHandle
	    }
	  }) : _vm._e(), (_vm.right_img_src) ? _c('image', {
	    staticClass: ["item-right-img"],
	    style: {
	      width: _vm.right_img_width_and_height[0],
	      height: _vm.right_img_width_and_height[1]
	    },
	    attrs: {
	      "src": _vm.right_img_src
	    }
	  }) : _vm._e(), (_vm.is_arrow) ? _c('div', {
	    staticClass: ["item-arrow"],
	    style: {
	      borderTopColor: _vm.is_arrow_color,
	      borderRightColor: _vm.is_arrow_color
	    }
	  }) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });