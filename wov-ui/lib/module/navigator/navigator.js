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