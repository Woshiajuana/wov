<template>
    <demo-menu demo_title="WovNavbar" :demo_arr="demo_arr" @onPress="onPressHandle"></demo-menu>
</template>

<script>
    import DemoMenu from '../../../components/demo-menu.vue'
    import PageUrl from '../../../config/page_url_config'
    import navigator from '../../../module/navigator'
    export default {
        data () {
            return {
                demo_arr: [
                    { left_text: '居顶的TAB切换', page_name: 'navbar-top' },
                    { left_text: '居底的TAB切换', page_name: 'navbar-bottom' },
                    { left_text: '菜单导航条切换', page_name: 'navbar-menu' },
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