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

/***/ 11:
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

/***/ })

/******/ });