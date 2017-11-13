<template>
    <wov-view :view_use_header="web_use_header"
              :view_header_center_txt="web_header_title">
        <web class="webview-inner"
             ref="webview"
             :src="web_src"
             @pagestart="pageStartHandle"
             @pagefinish="pageFinishHandle"
             @error="pageErrorHandle">
        </web>
        <div class="webview-menu"
             v-if="web_use_menu">
            <div class="webview-menu-item" @click="leftMenuClickHandle">
                <image class="webview-menu-item-icon" :src="web_menu_left_src"></image>
            </div>
            <div class="webview-menu-item" @click="centerMenuClickHandle">
                <image class="webview-menu-item-icon" :src="web_menu_center_src"></image>
            </div>
            <div class="webview-menu-item" @click="rightMenuClickHandle">
                <image class="webview-menu-item-icon" :src="web_menu_right_src"></image>
            </div>
        </div>
    </wov-view>
</template>

<script>
    const webview = weex.requireModule('webview');
    const navigator = weex.requireModule('navigator');
    import WovView from '../wov-view'
    import config from './config'
    export default {
        data () {
            return {
                page_count: 0
            }
        },
        props: {
            /**webview内容资源*/
            web_src: { default: config.web_src },

            /**是否使用头部*/
            web_use_header: { default: config.web_use_header },
            web_header_title: { default: config.web_header_title },

            /**是否使用菜单*/
            web_use_menu: { default: config.web_use_menu },

            /**菜单资源*/
            web_menu_left_src: { default: config.web_menu_left_src },
            web_menu_center_src: { default: config.web_menu_center_src },
            web_menu_right_src: { default: config.web_menu_right_src },

            /**是否使用点击事件*/
            web_use_left_event: { default: config.web_use_left_event },
            web_use_center_event: { default: config.web_use_center_event },
            web_use_right_event: { default: config.web_use_right_event },
        },
        methods: {
            /**页面开始加载触发*/
            pageStartHandle () {
                this.$emit('pageStart');
            },
            /**页面加载完成触发*/
            pageFinishHandle () {
                this.page_count += 1;
                this.$emit('pageFinish');
            },
            /**页面加载失败触发*/
            pageErrorHandle () {
                this.$emit('pageError');
            },
            /**左边菜单点击事件*/
            leftMenuClickHandle () {
                if(this.web_use_left_event) return this.$emit('leftMenuClick');
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
                this.web_use_center_event ? this.$emit('centerMenuClick') : webview.reload(this.$refs.webview);
            },
            /**右边菜单点击事件*/
            rightMenuClickHandle () {
                this.web_use_right_event ? this.$emit('rightMenuClick') : navigator.pop();
            }
        },
        components: {
            WovView
        }
    };
</script>

<style>
    .webview-inner {
        flex: 1;
    }
    .webview-menu {
        height: 98px;
        width: 750px;
        flex-direction: row;
        justify-content: space-between;
        background-color: #f5f5f9;
        border-top-width: 2px;
        border-top-color: #ddd;
        border-top-style: solid;
    }
    .webview-menu-item {
        justify-content: center;
        align-items: center;
        height: 98px;
        width: 98px;
    }
    .webview-menu-item-icon {
        width: 45px;
        height: 45px;
    }
</style>
