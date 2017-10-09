<template>
    <switch-com
        :switch_page_arr="switch_page_arr">
    </switch-com>
</template>

<script>
    import SwitchCom from './components/switch/switch.vue'
    export default {
        data () {
            return {
                switch_page_arr: [{
                    txt: '首页',
                    visibility: 'visible',
                    checked: true
                },
                {
                    txt: '发现',
                    visibility: 'hidden',
                    checked: false
                },
                {
                    txt: '留言',
                    visibility: 'hidden',
                    checked: false
                },
                {
                    txt: '关于',
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
            SwitchCom
        }
    }
</script>

<style scoped>
    .menu-content{
        flex: 1;
    }
</style>
