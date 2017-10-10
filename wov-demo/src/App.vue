<template>
    <wov-switch
        :switch_page_arr="switch_page_arr">
    </wov-switch>
</template>

<script>
    import { WovSwitch } from 'wov'
    import source from './assets/lib/source'
    import PageUrlConfig from './config/page_url_config'
    export default {
        data () {
            return {
                switch_page_arr: [{
                    txt: 'HOME',
                    src: PageUrlConfig['home'],
                    img_src: source('home-icon.png'),
                    img_checked_src: source('home-checked-icon.png'),
                    visibility: 'visible',
                    checked: true
                },
                {
                    txt: 'DEMO',
                    visibility: 'hidden',
                    src: PageUrlConfig['register'],
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
        methods: {},
        components: {
            WovSwitch
        }
    }
</script>
