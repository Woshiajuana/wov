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
	    view_header_left_color: '#000000',
	    view_header_left_txt_mar_left: 25,
	    view_header_left_txt_mar_right: 0,

	    /**头部中间图片样式样式定义*/
	    view_header_center_src: '',
	    view_header_center_src_size: [40, 40],
	    view_header_center_src_mar_left: 0,
	    view_header_center_src_mar_right: 0,

	    /**头部中间文字样式定义*/
	    view_header_center_txt: '',
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
	    view_header_right_color: '#000000',
	    view_header_right_txt_mar_left: 0,
	    view_header_right_txt_mar_right: 25

	};

/***/ })
/******/ ]);