<template>
    <wov-view center_item_title="居底的TAB切换" :left_item_img_src="left_item_img_src">
        <wov-switch :switch_page_arr="switch_page_arr"></wov-switch>
    </wov-view>
</template>

<script>
    import { WovSwitch, WovView } from 'wov'
    import source from '../../../assets/lib/source'
    export default {
        data () {
            return {
                left_item_img_src: source('return-icon.png'),
                switch_page_arr: [{
                    txt: 'A页面',
                    visibility: 'visible',
                    checked: true
                },
                {
                    txt: 'B页面',
                    visibility: 'hidden',
                    checked: false
                },
                {
                    txt: 'C页面',
                    visibility: 'hidden',
                    checked: false
                }]
            }
        },
        components: {
            WovView,
            WovSwitch
        }
    }
</script>