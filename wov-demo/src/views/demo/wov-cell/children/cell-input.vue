<template>
    <wov-view view_header_center_txt="带输入框设置">
        <wov-cell cell_left_txt="输入框" :cell_use_input="true" cell_input_placeholder="请输入文字" :cell_use_arrow="false"></wov-cell>
        <wov-cell cell_left_txt="密码框" :cell_use_input="true" cell_input_type="password" cell_input_placeholder="请输入密码" :cell_use_arrow="false"></wov-cell>
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