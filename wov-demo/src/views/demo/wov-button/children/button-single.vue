<template>
    <wov-view view_header_center_txt="过滤连续点击">
        <wov-button @onPress="oneHandle">
            <wov-cell cell_left_txt="点击一下，就不可点击"></wov-cell>
        </wov-button>
        <wov-button @onPress="twoHandle">
            <wov-cell cell_left_txt="始终都可以点击"></wov-cell>
        </wov-button>
        <wov-button @onPress="threeHandle">
            <wov-cell cell_left_txt="3秒之后才能再次点击" :cell_right_txt="time_prompt"></wov-cell>
        </wov-button>
    </wov-view>
</template>
<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    import WovCell from '../../../../components/wov/packages/wov-cell'
    import WovButton from '../../../../components/wov/packages/wov-button'
    import source from '../../../../assets/lib/source'
    import dialogs from '../../../../module/dialogs'
    export default {
        data () {
            return {
                img_src: source('cell-icon.png'),
                time_prompt: '可点击'
            }
        },
        methods: {
            oneHandle (callback) {
                dialogs.toast('你点击了一下,就不能再点击了');
            },
            twoHandle (callback) {
                callback();
                dialogs.toast('你始终都可以点击哦');
            },
            threeHandle (callback) {
                this.time_prompt = '不能点击';
                setTimeout(() => {
                    callback();
                    this.time_prompt = '可点击';
                },3000);
                dialogs.toast('3秒之后才能再次点击');
            }
        },
        components: {
            WovView,
            WovCell,
            WovButton
        }
    }
</script>