<template>
    <wov-view view_background_color="#fbf9fe"
              view_header_center_txt="菜单导航条切换"
              :view_header_left_src="left_item_img_src">
        <wov-navbar :nav_arr="nav_arr"></wov-navbar>
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
                    img_src: source('home-icon.png'),
                    img_checked_src: source('home-checked-icon.png'),
                    checked: true
                },
                {
                    txt: 'B页面',
                    img_src: source('demo-icon.png'),
                    src: PageUrl['navbar_a'],
                    img_checked_src: source('demo-checked-icon.png'),
                    checked: false
                },
                {
                    txt: 'C页面',
                    img_src: source('about-icon.png'),
                    src: PageUrl['navbar_a'],
                    img_checked_src: source('about-checked-icon.png'),
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