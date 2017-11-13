<template>
    <demo-menu demo_title="WovNavBar" :demo_arr="demo_arr" @onPress="onPressHandle"></demo-menu>
</template>

<script>
    import DemoMenu from '../../../components/demo-menu.vue'
    import PageUrl from '../../../config/page_url_config'
    import navigator from '../../../module/navigator/navigator'
    export default {
        data () {
            return {
                demo_arr: [
                    { left_text: '居顶的TAB切换', page_name: 'switch_top' },
                    { left_text: '居底的TAB切换', page_name: 'switch_bottom' },
                    { left_text: '菜单导航条切换', page_name: 'switch_menu' },
                ]
            }
        },
        methods: {
            onPressHandle ({ page_name }) {
                navigator.push({ url: PageUrl[page_name] });
            }
        },
        components: {
            DemoMenu
        }
    }
</script>