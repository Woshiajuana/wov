<template>
    <wov-view view_header_center_txt="ICON设置"
              view_header_left_txt="返回"
              view_header_right_txt="右边"
              @rightItemClick="rightItemClickHandle">
    </wov-view>
</template>
<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    import dialogs from '../../../../module/dialogs'
    export default {
        methods: {
            rightItemClickHandle () {
                dialogs.toast('你点击了右边，右边也可以为图片哦')
            }
        },
        components: {
            WovView
        }
    }
</script>
<style>

</style>