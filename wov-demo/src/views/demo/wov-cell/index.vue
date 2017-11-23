<template>
    <demo-menu demo_title="WovCell" :demo_arr="demo_arr" @onPress="onPressHandle"></demo-menu>
</template>

<script>
    import DemoMenu from '../../../components/demo-menu.vue'
    import PageUrl from '../../../config/page_url_config'
    import navigator from '../../../module/navigator'
    export default {
        data () {
            return {
                demo_arr: [
                    { left_text: '单行设置', page_name: 'cell-single' },
                    { left_text: '双行设置', page_name: 'cell-double' },
                    { left_text: '带输入框设置', page_name: 'cell-input' }
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