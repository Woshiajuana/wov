<template>

</template>

<script>
    module.exports =  {
        props: [
            'view_header_background_color',
            'view_header_height',
            'view_header_left_src',
            'view_header_left_src_size',
            'view_header_right_src_size',
            'view_header_background_image',
            'view_header_left_src_mar_left',
            'view_header_right_src_mar_right',
            'view_header_left_src_mar_right',
            'view_header_left_txt_mar_left',
            'view_header_left_txt_mar_right',
            'view_header_right_txt_mar_left',
            'view_header_right_txt_mar_right',
            'view_header_right_src_mar_left',
            'view_header_left_txt',
            'view_header_left_color',
            'view_header_center_txt',
            'view_header_center_color',
            'view_header_right_src',
            'view_header_right_txt',
            'view_header_right_color',
            'view_header_border_width',
            'view_header_border_color'
        ],
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
    .view-header-center{
        position: absolute;
        left: 120px;
        right: 120px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .header-center-text {
        font-size: 34px;
    }
    .header-left-image,
    .header-right-image {
        width: 40px;
        height: 40px;
    }
</style>

