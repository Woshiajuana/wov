'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (source_name) {
  return _config2.default.SOURCES_URL + source_name;
}; /**
    * Created by Administrator on 2017/8/28.
    */