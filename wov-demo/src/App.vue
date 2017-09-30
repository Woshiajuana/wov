<template>
    <div>
        <text>333</text>
        <!--<wov-switch-->
                <!--:switch_page_arr="switch_page_arr">-->
        <!--</wov-switch>-->
    </div>
</template>

<script>
    import  WovSwitch  from 'wov'
//    const WovSwitch = require('./../node_modules/wov/dist/index')
    export default {
        data () {
            return {
                switch_page_arr: [{
                    txt: '首页1',
//                    src: PageUrlConfig['message'],
                    visibility: 'visible',
                    img_icon_name: 'home-icon',
                    checked: true
                },
                {
                    txt: '发现1',
//                    src: PageUrlConfig['find'],
                    visibility: 'hidden',
                    img_icon_name: 'find-icon',
                    checked: false
                },
                {
                    txt: '留言',
//                    src: PageUrlConfig['home'],
                    visibility: 'hidden',
                    img_icon_name: 'message-icon',
                    checked: false
                },
                {
                    txt: '关于',
//                    src: PageUrlConfig['about'],
                    visibility: 'hidden',
                    img_icon_name: 'about-icon',
                    checked: false
                }]
            }
        },
        created () {
            console.log(WovSwitch)
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
//            WovSwitch
        }
    }
</script>

<style scoped>
    .menu-content{
        flex: 1;
    }
</style>
