<template>
    <div class="switch-wrap">
        <switch-menu
            :use_menu="use_menu"
            :menu_arr="switch_page_arr"
            :menu_position="menu_position == 'top' ? true : false"
            :menu_height="menu_height"
            :menu_border_width="menu_border_width"
            :menu_background_color="menu_background_color"
            :menu_font_size="menu_font_size"
            :menu_checked_color="menu_checked_color"
            @switchMenu="switchMenuHandle">
            <slot v-if="use_menu" name="menu"></slot>
        </switch-menu>
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
    const SwitchMenu = require('./children/switch-menu.vue');
    module.exports = {
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
            menu_border_width: { default: '4px' },
            /**菜单字体大小*/
            menu_font_size: { default: '28px' },
            /**菜单字体颜色*/
            menu_checked_color: { default: 'red' }
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
</style>
