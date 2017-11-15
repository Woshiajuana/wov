<template>
    <wov-view view_background_color="#fbf9fe"
              view_header_center_txt="居底的TAB切换">
        <wov-navbar :nav_arr="nav_arr"></wov-navbar>
    </wov-view>
</template>

<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    import WovNavbar from '../../../../components/wov/packages/wov-navbar'
    import PageUrl from '../../../../config/page_url_config'
    export default {
        data () {
            return {
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