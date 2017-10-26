<template>
    <div class="view-wrap">
        <view-header
            v-if="view_use_header"
            :view_header_background_color="view_header_background_color"
            :view_header_height="view_header_height"
            :view_header_left_src="view_header_left_src"
            :view_header_left_txt="view_header_left_txt"
            :view_header_left_color="view_header_left_color"
            :view_header_center_txt="view_header_center_txt"
            :view_header_center_color="view_header_center_color"
            :view_header_right_src="view_header_right_src"
            :view_header_right_txt="view_header_right_txt"
            :view_header_right_color="view_header_right_color"
            :view_header_border_width="view_header_border_width"
            :view_header_border_color="view_header_border_color"
            :view_header_left_src_size="view_header_left_src_size"
            :view_header_right_src_size="view_header_right_src_size"
            :view_header_left_src_mar_left="view_header_left_src_mar_left"
            :view_header_left_src_mar_right="view_header_left_src_mar_right"
            :view_header_right_src_mar_left="view_header_right_src_mar_left"
            :view_header_right_src_mar_right="view_header_right_src_mar_right"
            :view_header_left_txt_mar_left="view_header_left_txt_mar_left"
            :view_header_left_txt_mar_right="view_header_left_txt_mar_right"
            :view_header_right_txt_mar_left="view_header_right_txt_mar_left"
            :view_header_right_txt_mar_right="view_header_right_txt_mar_right"
            @rightItemClick="rightItemClickHandle"
            @leftItemClick="leftItemClickHandle">
        </view-header>
        <scroller class="view-inner"
            :style="{ top: view_use_header ? 90 : 0.1,
            backgroundColor: view_background_color}">
            <!--上拉刷新-->
            <refresh class="view-refresh"
                     v-if="view_use_refresh"
                     @refresh="refreshHandle"
                     @pullingdown="pullingDownHandle"
                     :style="{ backgroundColor: view_refresh_load_background_color }"
                     :display="is_refresh_status ? 'show' : 'hide'">
                <loading-indicator class="view-refresh-icon"
                                   v-if="is_refresh_type"
                                   :style="{ visibility: is_refresh_type ? 'visible' : 'hidden',
                                   color: view_indicator_color,
                                   backgroundColor: view_indicator_background_color }">
                </loading-indicator>
            </refresh>
            <!--/上拉刷新-->
            <!--主体-->
            <slot></slot>
            <!--/主体-->
            <!--下拉刷新-->
            <loading class="view-loading"
                     v-if="view_use_load"
                     @loading="loadHandle"
                     @pullingup="pullingUpHandle"
                     :style="{ backgroundColor: view_refresh_load_background_color }"
                     :display="is_load_status ? 'show' : 'hide'">
                <loading-indicator class="view-loading-icon"
                                   :style="{ visibility: is_load_type ? 'visible' : 'hidden',
                                   color: view_indicator_color,
                                   backgroundColor: view_indicator_background_color }">
                </loading-indicator>
                <text class="view-loading-text"
                      v-if="!is_load_type"
                      :style="{ color: view_load_done_color }">没有更多了</text>
            </loading>
            <!--/下拉刷新-->
        </scroller>
    </div>
</template>

<script>
    const ViewHeader = require('./children/view-header.vue');
    const navigator = weex.requireModule('navigator');
    module.exports =  {
        data () {
            return {
                /**下拉状态*/
                is_refresh_status: false,
                /**上拉状态*/
                is_load_status: false,
                /**是否可以上拉*/
                is_load_type: true,
                /**是否可以下拉*/
                is_refresh_type: true
            }
        },
        props: {
            /**是否不启用默认点击事件*/
            view_not_use_left_default_click: { default: false },
            /**是否有头部*/
            view_use_header: { default: true },
            /**主体背景颜色*/
            view_background_color: { default: '' },
            /**是否支持下拉刷新*/
            view_use_refresh: { default: false },
            /**是否支持上拉加载*/
            view_use_load: { default: false },
            /**导航条背景色*/
            view_header_background_color: { default: '#ef4735' },
            /**导航条边框宽度*/
            view_header_border_width: { default: 0 },
            /**导航条高度*/
            view_header_height: { default: 90 },
            /**左侧按钮图片*/
            view_header_left_src: { default: '' },
            /**左侧按钮标题*/
            view_header_left_txt: { default: '' },
            /**左侧按钮颜色*/
            view_header_left_color: { default: '#000000' },
            /**导航条标题*/
            view_header_center_txt: { default: '' },
            /**导航条标题颜色*/
            view_header_center_color: { default: '#fff' },
            /**右侧按钮图片*/
            view_header_right_src: { default: '' },
            /**右侧按钮标题*/
            view_header_right_txt: { default: '' },
            /**右侧按钮标题颜色*/
            view_header_right_color: { default: '#000000' },
            /**下拉上拉背景色*/
            view_refresh_load_background_color: { default: '#383838' },
            /**指示器颜色*/
            view_indicator_color: { default: '#58B7FF' },
            /**指示器背景颜色*/
            view_indicator_background_color: { default: '#FFFFFF' },
            /**字体颜色*/
            view_load_done_color: { default: '#FFFFFF' },

            view_header_border_color: { default: '#ddd' },
            view_header_left_src_size: { default: [50, 50] },
            view_header_right_src_size: { default: [40, 40] },
            view_header_left_src_mar_left: { default: 25 },
            view_header_left_src_mar_right: { default: 0 },
            view_header_right_src_mar_left: { default: 0 },
            view_header_right_src_mar_right: { default: 25 },
            view_header_left_txt_mar_left: { default: 25 },
            view_header_left_txt_mar_right: { default: 0 },
            view_header_right_txt_mar_left: { default: 0 },
            view_header_right_txt_mar_right: { default: 25 },
        },
        methods: {
            /**右边按钮点击事件*/
            rightItemClickHandle (event) {
                this.$emit('rightItemClick',event);
            },
            /**左边按钮点击事件*/
            leftItemClickHandle (event) {
                this.view_not_use_left_default_click ? this.$emit('leftItemClick',event) : navigator.pop();
            },
            /**上拉加载数据*/
            loadHandle (event) {
                this.is_load_status = true;
                this.is_load_type && this.$emit('load', event);
                !this.is_load_type && setTimeout(this.loaded,0);
            },
            /**下拉刷新数据*/
            refreshHandle (event) {
                this.is_refresh_status = true;
                this.is_refresh_type && this.$emit('refresh', event);
                !this.is_refresh_type && setTimeout(this.refreshed,0);
            },
            /**下拉距离*/
            pullingDownHandle (event) {
                this.$emit('pullingDown', event);
            },
            /**上拉距离*/
            pullingUpHandle (event) {
                this.$emit('pullingUp', event);
            },
            /**重置状态*/
            resetStatus () {
                this.is_load_status = false;
                this.is_refresh_status = false;
            },
            /**上拉完成*/
            loaded () {
                this.is_load_status = false;
            },
            /**下拉完成*/
            refreshed () {
                this.is_refresh_status = false;
            },
            /**禁止上拉*/
            banLoad () {
                this.is_load_type = false;
            },
            /**恢复上拉*/
            regainLoad () {
                this.is_load_type = true;
            },
            /**禁止下拉*/
            banRefresh () {
                this.is_refresh_type = false;
            },
            /**恢复下拉*/
            regainRefresh () {
                this.is_refresh_type = true;
            }
        },
        components: {
            ViewHeader
        }
    }
</script>

<style>
    .view-wrap{
        flex: 1;
    }
    .view-inner{
        position: absolute;
        width: 750px;
        left: 0;
        bottom: 0;
    }
    .view-refresh,
    .view-loading{
        justify-content:center;
        flex-direction: row;
        align-items:center;
        height: 100px;
        line-height: 100px;
    }
    .view-refresh-icon,
    .view-loading-icon{
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
    .view-refresh-icon{
        margin-bottom: 25px;
    }
    .view-loading-text{
        font-size: 24px;
    }
</style>
