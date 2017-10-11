<template>
    <wov-view background_color="#fbf9fe" center_item_title="菜单导航条切换" :left_item_img_src="left_item_img_src">
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
                    txt: 'HOME',
                    img_src: source('home-icon.png'),
                    img_checked_src: source('home-checked-icon.png'),
                    visibility: 'visible',
                    checked: true
                },
                {
                    txt: 'DEMO',
                    visibility: 'hidden',
                    img_src: source('demo-icon.png'),
                    img_checked_src: source('demo-checked-icon.png'),
                    checked: false
                },
                {
                    txt: 'ABOUT',
                    visibility: 'hidden',
                    img_src: source('about-icon.png'),
                    img_checked_src: source('about-checked-icon.png'),
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