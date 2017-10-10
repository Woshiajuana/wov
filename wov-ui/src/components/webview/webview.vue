<template>
    <div class="webview-wrap">
        <web class="webview-inner"
             ref="webview"
             :src="web_src"
             @pagestart="pageStartHandle"
             @pagefinish="pageFinishHandle"
             @error="pageErrorHandle">
        </web>
        <div class="webview-menu">
            <div class="webview-menu-item" @click="leftMenuClickHandle">
                <image class="webview-menu-item-icon" :src="left_menu_src"></image>
            </div>
            <div class="webview-menu-item" @click="centerMenuClickHandle">
                <image class="webview-menu-item-icon" :src="center_menu_src"></image>
            </div>
            <div class="webview-menu-item" @click="rightMenuClickHandle">
                <image class="webview-menu-item-icon" :src="right_menu_src"></image>
            </div>
        </div>
    </div>
</template>

<script>
    const webview = weex.requireModule('webview');
    const navigator = weex.requireModule('navigator');
    module.exports = {
        data () {
            return {
                page_count: 0
            }
        },
        props: {
            /**webview内容资源*/
            web_src: { default: '' },
            /**左边菜单资源*/
            left_menu_src: { default: '' },
            /**中间菜单资源*/
            center_menu_src: { default: '' },
            /**右边菜单资源*/
            right_menu_src: { default: '' },
            /**是否使用默认点击事件*/
            use_left_event: { default: false },
            use_center_event: { default: false },
            use_right_event: { default: false }
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
                if(this.use_left_event) return this.$emit('leftMenuClick');
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
                this.use_center_event ? this.$emit('centerMenuClick') : webview.reload(this.$refs.webview);
            },
            /**右边菜单点击事件*/
            rightMenuClickHandle () {
                this.use_right_event ? this.$emit('rightMenuClick') : navigator.pop();
            }
        }
    };
</script>

<style>
    .webview-wrap {
        flex: 1;
    }
    .webview-inner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 98px;
    }
    .webview-menu {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 98px;
        width: 750px;
        flex-direction: row;
        justify-content: space-between;
        background-color: #f5f5f9;
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
