'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('./config');

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