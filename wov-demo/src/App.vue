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
                    visibility: 'visible',
                    img_icon_name: 'home-icon',
                    checked: true
                },
                {
                    txt: 'DEMO',
                    src: PageUrlConfig['home'],
                    visibility: 'hidden',
                    img_icon_name: 'find-icon',
                    checked: false
                },
                {
                    txt: 'ABOUT',
                    src: PageUrlConfig['home'],
                    visibility: 'hidden',
                    img_icon_name: 'message-icon',
                    checked: false
                }]
            }
        },
        methods: {
            /**切换导航菜单*/
            switchMenuHandle (index) {
                for (var i = 0; i < this.switch_page_arr.length; i++) {
                    var item = this.switch_page_arr[i];
                    if (i == index) {
                        item.visibility = 'visible';
                        item.checked = true;
                    } else {
                        item.visibility = 'hidden';
                        item.checked = false;
                    }
                }
            }
        },
        components: {
            WovSwitch
        }
    }
</script>
