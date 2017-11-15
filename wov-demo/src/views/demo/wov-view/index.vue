<template>
    <demo-menu demo_title="WovView" :demo_arr="demo_arr" @onPress="onPressHandle"></demo-menu>
</template>

<script>
    import DemoMenu from '../../../components/demo-menu.vue'
    import PageUrl from '../../../config/page_url_config'
    import navigator from '../../../module/navigator'
    export default {
        data () {
            return {
                demo_arr: [
                    { left_text: '全局可设置', page_name: 'view-global' },
                    { left_text: '上拉刷新，下拉加载', page_name: 'view-refresh-load' }
                ]
            }
        },
        methods: {
            onPressHandle ({ page_name }) {
                navigator.push(page_name);
            }
        },
        components: {
            DemoMenu
        }
    }
</script>