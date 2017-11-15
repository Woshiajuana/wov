<template>
    <wov-view view_header_center_txt="单行设置">
        <wov-cell cell_left_txt="左边" cell_right_txt="右边" :cell_use_arrow="false"></wov-cell>
        <wov-cell cell_left_txt="使用小箭头" cell_right_txt="右边"></wov-cell>
    </wov-view>
</template>
<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    import WovCell from '../../../../components/wov/packages/wov-cell'
    export default {
        components: {
            WovView,
            WovCell
        }
    }
</script>
<style>

</style>