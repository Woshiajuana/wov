<template>
    <wov-switch
            :switch_page_arr="switch_page_arr">
    </wov-switch>
</template>

<script>
    import { WovSwitch } from 'wov'
    import PageUrlConfig from './config/page_url_config'
    export default {
        data () {
            return {
                switch_page_arr: [{
                    txt: 'HOME',
                    src: PageUrlConfig['home'],
                    img_src: 'http://192.170.2.151:13140/src/assets/img/home-icon.png',
                    img_checked_src: 'http://192.170.2.151:13140/src/assets/img/home-checked-icon.png',
                    visibility: 'visible',
                    checked: true
                },
                {
                    txt: 'DEMO',
                    visibility: 'hidden',
                    src: PageUrlConfig['register'],
                    img_src: 'http://192.170.2.151:13140/src/assets/img/demo-icon.png',
                    img_checked_src: 'http://192.170.2.151:13140/src/assets/img/demo-checked-icon.png',
                    checked: false
                },
                {
                    txt: 'ABOUT',
                    visibility: 'hidden',
                    img_src: 'http://192.170.2.151:13140/src/assets/img/about-icon.png',
                    img_checked_src: 'http://192.170.2.151:13140/src/assets/img/about-checked-icon.png',
                    checked: false
                }]
            }
        },
        methods: {},
        components: {
            WovSwitch
        }
    }
</script>
