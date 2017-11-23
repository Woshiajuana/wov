<template>
    <demo-menu demo_title="WovButton" :demo_arr="demo_arr" @onPress="onPressHandle"></demo-menu>
</template>

<script>
    import DemoMenu from '../../../components/demo-menu.vue'
    import PageUrl from '../../../config/page_url_config'
    import navigator from '../../../module/navigator'
    export default {
        data () {
            return {
                demo_arr: [
                    { left_text: '过滤连续点击', page_name: 'button-single' },
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