<template>
    <wov-view view_background_color="#fbf9fe"
              view_header_center_txt="居顶的TAB切换"
              :view_header_left_src="left_item_img_src">
        <wov-navbar :nav_arr="nav_arr"
                    nav_position="top">
        </wov-navbar>
    </wov-view>
</template>

<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    import WovNavbar from '../../../../components/wov/packages/wov-navbar'
    import PageUrl from '../../../../config/page_url_config'
    import source from '../../../../assets/lib/source'
    export default {
        data () {
            return {
                left_item_img_src: source('return-icon.png'),
                nav_arr: [{
                    txt: 'A页面',
                    src: PageUrl['navbar_a'],
                    checked: true
                },
                {
                    txt: 'B页面',
                    src: PageUrl['navbar_b'],
                    checked: false
                },
                {
                    txt: 'C页面',
                    src: PageUrl['navbar_c'],
                    checked: false
                }]
            }
        },
        components: {
            WovView,
            WovNavbar
        }
    }
</script>