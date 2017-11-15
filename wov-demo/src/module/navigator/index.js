var navigator = weex.requireModule('navigator');
import Defer from '../../assets/lib/defer'
import PageUrl from '../../config/page_url_config'
const defer = new Defer(1000);
export default {
    /**压入*/
    push: ( options, params ) => {
        if ( !defer.do(options + JSON.stringify(params)) ) return null; // 过滤连续点击
        var url = options.url ? PageUrl[options.url] : PageUrl[options],
            animated = options.animated || 'true',
            close = options.close || 'false';
        url = params ? url + '?params=' + encodeURIComponent(JSON.stringify(params)) : url;
        navigator.push({ url: url, animated: animated, close: close }, e => {});
    },
    /**弹出*/
    pop: (animated = 'true') => {
        navigator.pop({ animated: animated });
    },
    /**获取参数*/
    params: (weex) => {
        var bundleUrl = weex.$getConfig().bundleUrl;
        var params = bundleUrl.substr(bundleUrl.indexOf("?params=") + 8);
        return JSON.parse(decodeURIComponent(decodeURIComponent(params)));
    }
}
