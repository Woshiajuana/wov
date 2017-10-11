<template>
    <wov-view
        class="view"
        center_item_title="WovSwitch"
        :left_item_img_src="left_item_img_src">
        <div class="main-wrap">
            <wov-item
                v-for="(item, index) in menu_arr"
                left_width='200'
                height="100"
                :key="index"
                :left_text="item.left_text"
                :border_bottom_width="index == menu_arr.length - 1 ? 0 : 2"
                :left_img_width_and_height="[60,60]"
                @onPress="onPressHandle(item)">
            </wov-item>
        </div>
    </wov-view>
</template>

<script>
    import { WovView, WovItem } from 'wov'
    import source from '../assets/lib/source'
    export default {
        data () {
            return {
                left_item_img_src: source('return-icon.png')
            }
        },
        props: {
            menu_arr: { default: '' }
        },
        methods: {
            onPressHandle ( item ) {
                this.$emit('onPress', item);
            }
        },
        components: {
            WovView,
            WovItem
        }
    }
</script>

<style>
    .view{
        background-color: #fbf9fe;
    }
    .main-wrap{
        margin-top: 180px;
        border-top-color: #ddd;
        border-top-width: 2px;
        border-top-style: solid;
        border-bottom-color: #ddd;
        border-bottom-width: 2px;
        border-bottom-style: solid;
    }
</style>
