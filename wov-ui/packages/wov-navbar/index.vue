<template>
    <div class="switch-wrap">
        <!--导航条-->
        <div class="switch-menu-wrap"
             :class="[menu_position ? 'top' : 'bottom']"
             :style="{ height: menu_height,
             backgroundColor: menu_background_color }">
            <slot v-if="use_menu" name="menu"></slot>
            <div v-if="!use_menu"
                 :style="{ height: menu_height,
                 borderTopWidth: item.img_src ? (menu_position ? 0 : menu_border_width) : (menu_position ? 0 : menu_border_width),
                 borderBottomWidth: item.img_src ? (menu_position ? menu_border_width : 0) : (menu_position ? menu_border_width : 0),
                 borderTopColor: item.img_src ? menu_border_color : (item.checked ? menu_checked_color : menu_border_color),
                 borderBottomColor: item.img_src ? menu_border_color : (item.checked ? menu_checked_color : menu_border_color)}"
                 class="switch-menu-item"
                 v-for="(item, index) in menu_arr"
                 @click="switchMenuHandle(item, index)"
                 :key="index">
                <image v-if="item.img_src" :src="item.checked ? (item.img_checked_src || item.img_src) : item.img_src" class="switch-menu-item-img"></image>
                <text class="switch-menu-item-txt"
                      :style="{color: item.checked ? menu_checked_color : menu_font_color,
                      fontSize: item.img_src ? '22px' : menu_font_size }">{{item.txt}}</text>
            </div>
        </div>
        <!--/导航条-->
        <!--主体-->
        <div class="switch-inner"
             :style="{ top: menu_position == 'top' ? 100 : 0,
             bottom: menu_position == 'top' ? 0 : 100 }">
            <embed class="switch-content"
                   v-for="(item, index) in switch_page_arr"
                   :key="index"
                   :style="{visibility: item.visibility}"
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
            menu_position: { default: 'bottom' },
            /**菜单高度*/
            menu_height: { default: 100 },
            /**菜单颜色*/
            menu_background_color: { default: '#F7F7FA' },
            /**内容*/
            switch_page_arr: { default: [] },
            /**是否有默认*/
            use_menu: { default: false },
            /**菜单响应状态*/
            menu_border_width: { default: '2px' },
            /**菜单字体大小*/
            menu_font_size: { default: '32px' },
            /**菜单字体颜色*/
            menu_checked_color: { default: '#58B7FF' },
            /**边框的颜色*/
            menu_border_color: { default: '#ddd' },
            /**菜单字体颜色*/
            menu_font_color: { default: '#999' }
        },
        methods: {
            /**切换菜单*/
            switchMenuHandle (item, index) {
                for (var i = 0; i < this.switch_page_arr.length; i++) {
                    var item = this.switch_page_arr[i];
                    if (i == index) {
                        item.visibility = 'visible';
                        item.checked = true;
                    } else {
                        item.visibility = 'hidden';
                        item.checked = false;
                    }
                }
                this.$emit('switchMenu',item,index);
            }
        },
        components: {
            SwitchMenu
        }
    }
</script>

<style>
    .switch-wrap{
        flex: 1;
    }
    .switch-inner{
        position: absolute;
        width: 750px;
        left: 0;
        right: 0;
    }
    .switch-content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .switch-menu-wrap {
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
    .switch-menu-item {
        flex: 1;
        justify-content: center;
        align-items: center;
        border-bottom-style: solid;
        border-top-style: solid;
    }
    .switch-menu-item-txt {
        justify-content: center;
        align-items: center;
    }
    .switch-menu-item-img {
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
    }
</style>
