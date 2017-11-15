<template>
    <wov-wev-view :web_menu_center_src="center_menu_src"
                  :web_menu_left_src="left_menu_src"
                  :web_menu_right_src="right_menu_src"
                  :web_src="webviewSrcCom">
    </wov-wev-view>
</template>

<script>
    import WovWevView from '../../components/wov/packages/wov-webview'
    import navigator from '../../module/navigator'
    import source from '../../assets/lib/source'
    export default {
        data () {
            return {
                left_menu_src: source('return-icon.png'),
                center_menu_src: source('refresh-icon.png'),
                right_menu_src: source('close-icon.png')
            }
        },
        computed: {
            /**webview内容资源*/
            webviewSrcCom () {
                return navigator.params(this) ? navigator.params(this).link : '';
            }
        },
        methods: {
            /**页面开始加载触发*/
            pageStartHandle () {},
            /**页面加载完成触发*/
            pageFinishHandle () {
                this.page_count += 1;
            },
            /**页面加载失败触发*/
            pageErrorHandle () {},
            /**左边菜单点击事件*/
            leftMenuClickHandle () {
                var page_count = this.page_count;
                webview.goBack(this.$refs.webview);
                setTimeout(() => {
                    if (page_count === this.page_count) {
                        return navigator.pop();
                    }
                }, 200);
            },
            /**中间菜单点击事件*/
            centerMenuClickHandle () {
                webview.reload(this.$refs.webview)
            },
            /**右边菜单点击事件*/
            rightMenuClickHandle () {
                navigator.pop();
            }
        },
        components: {
            WovWevView
        }
    };
</script>