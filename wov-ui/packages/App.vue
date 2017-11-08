<template>
    <wov-view
            :view_header_left_src="return_src"
            :view_header_right_src="return_src"
            view_header_center_txt="哈哈">
        <text>xxxx</text>
    </wov-view>
</template>

<script>
    import WovView from './wov-view'
    export default {
        data () {
            return {
                return_src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2'
            }
        },
        components: {
            WovView
        }
    }
</script>