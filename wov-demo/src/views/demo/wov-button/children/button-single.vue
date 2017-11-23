<template>
    <wov-view view_header_center_txt="过滤连续点击">
        <wov-button @onPress="onPressHandle(1, $event)">
            <wov-cell cell_left_txt="点击一下，就不可点击"></wov-cell>
        </wov-button>
    </wov-view>
</template>
<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    import WovCell from '../../../../components/wov/packages/wov-cell'
    import WovButton from '../../../../components/wov/packages/wov-button'
    import source from '../../../../assets/lib/source'
    export default {
        data () {
            return {
                img_src: source('cell-icon.png'),
                type
            }
        },
        methods: {
            onPressHandle (type, callback) {
                switch (type) {
                    case 1:

                        break;
                }
            }
        },
        components: {
            WovView,
            WovCell,
            WovButton
        }
    }
</script>