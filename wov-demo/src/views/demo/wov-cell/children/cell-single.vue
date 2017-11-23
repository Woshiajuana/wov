<template>
    <wov-view view_header_center_txt="单行设置">
        <wov-cell cell_left_txt="左边" cell_right_txt="右边" :cell_use_arrow="false"></wov-cell>
        <wov-cell cell_left_txt="使用小箭头" cell_right_txt="右边"></wov-cell>
        <wov-cell :cell_left_src="img_src" cell_left_txt="左边使用图片" cell_right_txt="右边" :cell_use_arrow="false"></wov-cell>
        <wov-cell :cell_right_src="img_src" cell_left_txt="左边" cell_right_txt="右边使用图片" :cell_use_arrow="false"></wov-cell>
    </wov-view>
</template>
<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    import WovCell from '../../../../components/wov/packages/wov-cell'
    import source from '../../../../assets/lib/source'
    export default {
        data () {
            return {
                img_src: source('cell-icon.png')
            }
        },
        components: {
            WovView,
            WovCell
        }
    }
</script>