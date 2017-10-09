<template>
    <div class="switch-menu-wrap"
         :class="[menu_position ? 'top' : 'bottom']"
         :style="{ height: menu_height,
         backgroundColor: menu_background_color }">
        <slot v-if="use_menu"></slot>
        <div v-if="!use_menu"
             :style="{ height: menu_height,
             borderTopWidth: (menu_position && !item.img_src) ? 0 : menu_border_width,
             borderBottomWidth: (menu_position && !item.img_src) ? menu_border_width : 0,
             borderTopColor: item.checked ? 'red' : '#dddddd',
             borderBottomColor: item.checked ? 'red' : '#dddddd'}"
             class="switch-menu-item"
             v-for="(item, index) in menu_arr"
             @click="switchMenuHandle(item, index)"
             :key="index">
            <image v-if="item.img_src" :src="item.checked ? item.img_checked_src : item.img_src" class="switch-menu-item-img"></image>
            <text class="switch-menu-item-txt"
                  :style="{color: item.checked ? '#58B7FF' : '#999999',
                  fontSize: menu_font_size}">{{item.txt}}</text>
        </div>
    </div>
</template>
<script>
    module.exports = {
        props: [ 'menu_arr', 'menu_position', 'menu_height', 'menu_background_color', 'use_menu', 'menu_border_width', 'menu_font_size' ],
        methods: {
            switchMenuHandle (item, index) {
                this.$emit('switchMenu', item, index);
            }
        }
    }
</script>
<style>
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
