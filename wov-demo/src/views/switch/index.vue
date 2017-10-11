<template>
    <demo-menu :menu_arr="menu_arr" @onPress="onPressHandle"></demo-menu>
</template>

<script>
    import DemoMenu from '../../components/demo-menu.vue'
    export default {
        data () {
            return {
                menu_arr: [
                    { left_text: '居顶的TAB切换', page_name: 'switch_top' },
                    { left_text: '居底的TAB切换', page_name: 'switch_bottom' },
                    { left_text: 'APP菜单切换', page_name: 'switch_menu' },
                ]
            }
        },
        methods: {
            onPressHandle ( item ) {
                
            }
        },
        components: {
            DemoMenu
        }
    }
</script>