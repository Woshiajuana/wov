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
                    checked: true
                },
                {
                    txt: 'DEMO',
                    visibility: 'hidden',
                    checked: false
                },
                {
                    txt: 'ABOUT',
                    visibility: 'hidden',
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
