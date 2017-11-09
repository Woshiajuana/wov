<template>
    <div class="nav-bar-wrap">
        <!--导航条-->
        <div class="nav-wrap"
             :class="[nav_position ? 'top' : 'bottom']"
             :style="{ height: nav_height,
             backgroundColor: nav_background_color }">
            <slot v-if="use_menu" name="menu"></slot>
            <div v-if="!use_menu"
                 :style="{ height: nav_height,
                 borderTopWidth: item.img_src ? (nav_position ? 0 : nav_border_width) : (nav_position ? 0 : nav_border_width),
                 borderBottomWidth: item.img_src ? (nav_position ? nav_border_width : 0) : (nav_position ? nav_border_width : 0),
                 borderTopColor: item.img_src ? nav_border_color : (item.checked ? nav_checked_color : nav_border_color),
                 borderBottomColor: item.img_src ? nav_border_color : (item.checked ? nav_checked_color : nav_border_color)}"
                 class="nav-item"
                 v-for="(item, index) in nav_arr"
                 @click="switchNavHandle(item, index)"
                 :key="index">
                <image class="nav-item-img"
                       v-if="item.img_src"
                       :src="item.checked ? (item.img_checked_src || item.img_src) : item.img_src">
                </image>
                <text class="nav-item-txt"
                      :style="{color: item.checked ? nav_checked_color : nav_font_color,
                      fontSize: item.img_src ? '22px' : nav_font_size }">{{item.txt}}</text>
            </div>
        </div>
        <!--/导航条-->
        <!--主体-->
        <div class="nav-bar-inner"
             :style="{ top: nav_position == 'top' ? 100 : 0,
             bottom: nav_position == 'top' ? 0 : 100 }">
            <embed class="nav-bar-content"
                   v-for="(item, index) in nav_arr"
                   :key="index"
                   :style="{visibility: item.checked ? 'visible' : 'hidden'}"
                   :src="item.src"
                   type="weex">
            </embed>
        </div>
        <!--/主体-->
    </div>
</template>

<script>
    export default {
        props: {
            /**菜单位置*/
            nav_position: { default: 'bottom' },
            /**菜单高度*/
            nav_height: { default: 100 },
            /**菜单颜色*/
            nav_background_color: { default: '#F7F7FA' },
            /**内容*/
            nav_arr: { default: [] },
            /**是否有默认*/
            use_menu: { default: false },
            /**菜单响应状态*/
            nav_border_width: { default: '2px' },
            /**菜单字体大小*/
            nav_font_size: { default: '32px' },
            /**菜单字体颜色*/
            nav_checked_color: { default: '#58B7FF' },
            /**边框的颜色*/
            nav_border_color: { default: '#ddd' },
            /**菜单字体颜色*/
            nav_font_color: { default: '#999' }
        },
        methods: {
            /**切换菜单*/
            switchNavHandle (item, index) {
                this.nav_arr.forEach((item, i) => {
                    item.checked = i === index;
                });
                this.$emit('switchNav',item,index);
            }
        }
    }
</script>

<style>
    .nav-bar-wrap{
        flex: 1;
    }
    .nav-bar-inner{
        position: absolute;
        width: 750px;
        left: 0;
        right: 0;
    }
    .nav-bar-content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .nav-wrap {
        position: absolute;
        left: 0;
        width: 750px;
        flex-direction: row;
        align-items: center;
    }
    .top {
        top: 0;
    }
    .bottom {
        bottom: 0;
    }
    .nav-item {
        flex: 1;
        justify-content: center;
        align-items: center;
        border-bottom-style: solid;
        border-top-style: solid;
    }
    .nav-item-txt {
        justify-content: center;
        align-items: center;
    }
    .nav-item-img {
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
    }
</style>
