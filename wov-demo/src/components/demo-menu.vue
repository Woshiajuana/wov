<template>
    <wov-view class="view"
              :view_header_center_txt="demo_title"
              :view_header_left_src="left_item_img_src">
        <div class="main-wrap">
            <wov-cell v-for="(item, index) in demo_arr"
                      :key="index"
                      cell_height="100"
                      :cell_left_txt="item.left_text"
                      :cell_border_width="index == demo_arr.length - 1 ? 0 : 2"
                      :cell_left_src_size="[60,60]"
                      @click.native="onPressHandle(item)">
            </wov-cell>
        </div>
        <div class="reminder-wrap">
            <text class="reminder-text">只展示了部分功能，详情请见官网 o(∩_∩)o</text>
        </div>
    </wov-view>
</template>

<script>
    import WovView from '../components/wov/packages/wov-view'
    import WovCell from '../components/wov/packages/wov-cell'
    import source from '../assets/lib/source'
    export default {
        data () {
            return {
                left_item_img_src: source('return-icon.png')
            }
        },
        props: {
            demo_arr: { default: '' },
            demo_title: { default: ''}
        },
        methods: {
            onPressHandle ( item ) {
                this.$emit('onPress', item);
            }
        },
        components: {
            WovView,
            WovCell
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
        background-color: #fff;
    }
    .reminder-wrap{
        margin-top: 120px;
        height: 100px;
        justify-content: center;
        align-items: center;
    }
    .reminder-text{
        font-size: 20px;
        color: #999;
    }
</style>
