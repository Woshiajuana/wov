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

/***/ })
/******/ ]);