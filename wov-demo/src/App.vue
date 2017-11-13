<template>
    <wov-navbar :nav_arr="nav_arr"></wov-navbar>
</template>

<script>
    import WovNavbar from './components/wov/packages/wov-navbar'
    import source from './assets/lib/source'
    import PageUrlConfig from './config/page_url_config'
    export default {
        data () {
            return {
                nav_arr: [{
                    txt: 'HOME',
                    src: PageUrlConfig['home'],
                    img_src: source('home-icon.png'),
                    img_checked_src: source('home-checked-icon.png'),
                    checked: true
                },
                {
                    txt: 'DEMO',
                    src: PageUrlConfig['demo'],
                    img_src: source('demo-icon.png'),
                    img_checked_src: source('demo-checked-icon.png'),
                    checked: false
                },
                {
                    txt: 'ABOUT',
                    src: PageUrlConfig['about'],
                    img_src: source('about-icon.png'),
                    img_checked_src: source('about-checked-icon.png'),
                    checked: false
                }]
            }
        },
        methods: {},
        components: {
            WovNavbar
        }
    }
</script>
