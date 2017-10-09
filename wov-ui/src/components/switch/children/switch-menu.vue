<template>
    <div class="switch-menu-wrap"
         :class="[menu_position ? 'top' : 'bottom']"
         :style="{ height: menu_height,
         borderTopWidth: menu_position ? 0 : 1,
         borderBottomWidth: menu_position ? 1 : 0,
         backgroundColor: menu_background_color }">
        <slot v-if="use_menu"></slot>
        <div v-if="!use_menu"
             class="switch-menu-item"
             v-for="(item, index) in switch_page_arr"
             @click="switchMenuHandle(item, index)"
             :key="index">
            <image v-if="item.img_src" :src="item.checked ? item.img_checked_src : item.img_src" class="switch-menu-item-img"></image>
            <text class="switch-menu-item-txt" :style="{color: item.checked ? '#58B7FF' : '#999999'}">{{item.txt}}</text>
        </div>
    </div>
</template>
<script>
    module.exports = {
        props: [ 'switch_page_arr', 'menu_position', 'menu_height', 'menu_background_color', 'use_menu' ],
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
        border-top-width: 1px;
        border-top-color: #c0bfc4;
        border-top-style: solid;
        border-bottom-color: #c0bfc4;
        border-bottom-style: solid;
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
    }
    .switch-menu-item-txt {
        font-size: 28px;
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
