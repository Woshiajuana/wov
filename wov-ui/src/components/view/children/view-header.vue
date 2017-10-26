<template>
    <div class="view-header"
         :style="{ height: view_header_height,
         backgroundColor: view_header_background_color,
         borderBottomColor: view_header_border_color,
         borderBottomWidth: view_header_border_width }">
        <div class="view-header-left"
             :style="{ height: view_header_height}"
             @click="leftItemClickHandle">
            <image class="header-left-image"
                   v-if="view_header_left_src"
                   :style="{width: view_header_left_src_size[0],
                   marginLeft: view_header_left_src_mar_left,
                   marginRight: view_header_left_src_mar_right,
                   height: view_header_left_src_size[1]}"
                   :src="view_header_left_src">
            </image>
            <text class="header-left-text"
                  v-if="view_header_left_txt"
                  :style="{ color: view_header_left_color,
                   marginLeft: view_header_left_txt_mar_left,
                   marginRight: view_header_left_txt_mar_right}">{{view_header_left_txt}}</text>
        </div>
        <text :style="{ color: view_header_center_color }" class="header-center-text">{{view_header_center_txt}}</text>
        <div class="view-header-right"
             :style="{ height: view_header_height}"
             @click="rightItemClickHandle">
            <text  class="header-right-text"
                   v-if="view_header_right_txt"
                   :style="{ color: view_header_right_color,
                   marginLeft: view_header_right_txt_mar_left,
                   marginRight: view_header_right_txt_mar_right }">{{view_header_right_txt}}</text>
            <image v-if="view_header_right_src"
                   :src="view_header_right_src"
                   :style="{width: view_header_right_src_size[0],
                   marginLeft: view_header_right_src_mar_left,
                   marginRight: view_header_right_src_mar_right,
                   height: view_header_right_src_size[1]}"
                   class="header-right-image"></image>
        </div>
    </div>
</template>

<script>
    module.exports =  {
        props: [ 'view_header_background_color', 'view_header_height', 'view_header_left_src',
            'view_header_left_src_size', 'view_header_right_src_size',
            'view_header_left_src_mar_left', 'view_header_right_src_mar_right',
            'view_header_left_src_mar_right','view_header_left_txt_mar_left',
            'view_header_left_txt_mar_right','view_header_right_txt_mar_left',
            'view_header_right_txt_mar_right','view_header_right_src_mar_left',
            'view_header_left_txt', 'view_header_left_color', 'view_header_center_txt',
            'view_header_center_color', 'view_header_right_src', 'view_header_right_txt',
            'view_header_right_color', 'view_header_border_width', 'view_header_border_color' ],
        methods: {
            /**右边按钮点击事件*/
            rightItemClickHandle (event) {
                this.$emit('rightItemClick',event);
            },
            /**左边按钮点击事件*/
            leftItemClickHandle (event) {
                this.$emit('leftItemClick',event);
            }
        }
    }
</script>

<style>
    .view-header {
        position: fixed;
        flex-direction: row;
        top: 0;
        left: 0;
        right: 0;
        width: 750px;
    }
    .view-header-right,
    .view-header-left {
        position: absolute;
        flex-direction: row;
        align-items: center;
        top: 0;
    }
    .view-header-right{
        right: 0;
    }
    .view-header-left{
        left: 0;
    }
    .header-right-text,
    .header-left-text {
        text-align: right;
        font-size: 30px;
    }
    .header-center-text {
        position: absolute;
        height: 88px;
        left: 120px;
        right: 120px;
        line-height: 88px;
        text-align: center;
        font-size: 34px;
    }
    .header-left-image,
    .header-right-image {
        width: 40px;
        height: 40px;
    }
</style>

