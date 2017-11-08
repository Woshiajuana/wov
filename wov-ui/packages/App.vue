<template>
    <switch-com
        :switch_page_arr="switch_page_arr">
    </switch-com>
</template>

<script>
    import SwitchCom from './switch/switch.vue'
    export default {
        data () {
            return {
                switch_page_arr: [{
                    txt: '首页',
                    visibility: 'visible',
                    img_src: 'http://icon.nipic.com/BannerPic/20171009/original/20171009101241_1.jpg',
                    checked: true
                },
                {
                    txt: '发现',
                    visibility: 'hidden',
                    img_src: 'http://icon.nipic.com/BannerPic/20171009/original/20171009101241_1.jpg',
                    checked: false
                },
                {
                    txt: '留言',
                    visibility: 'hidden',
                    img_src: 'http://icon.nipic.com/BannerPic/20171009/original/20171009101241_1.jpg',
                    checked: false
                },
                {
                    txt: '关于',
                    visibility: 'hidden',
                    img_src: 'http://icon.nipic.com/BannerPic/20171009/original/20171009101241_1.jpg',
                    checked: false
                }]
            }
        },
        components: {
            SwitchCom
        }
    }
</script>