<template>
    <wov-view class="about-view"
              view_header_background_color="#fbf9fe"
              view_header_left_src=""
              view_header_center_txt="关于">
        <div class="container-inner">
            <wov-cell
                left_text="Name"
                right_text="wov"
                :is_arrow="false"
                height="100"
                border_bottom_width="2">
            </wov-cell>
            <wov-cell
                left_text="Version"
                right_text="0.0.14"
                :is_arrow="false"
                height="100"
                border_bottom_width="2">
            </wov-cell>
            <wov-cell
                left_text="Introduction"
                right_text="A Weex UI"
                :is_arrow="false"
                left_width="180"
                height="100"
                border_bottom_width="2">
            </wov-cell>
            <wov-cell
                left_text="Author"
                right_text="Woshiajuana"
                :is_arrow="false"
                height="100"
                border_bottom_width="2">
            </wov-cell>
            <wov-cell
                left_text="E-Mail"
                right_text="zhigang.chen@owulia.com"
                :is_arrow="false"
                height="100"
                border_bottom_width="2">
            </wov-cell>
            <wov-cell
                left_text="Links"
                right_text=""
                height="100"
                @onPress="onPressHandle"
                border_bottom_width="0">
            </wov-cell>
        </div>
    </wov-view>
</template>

<script>
    import WovView from '../../components/wov/packages/wov-view'
    import WovCell from '../../components/wov/packages/wov-cell'
    import navigator from '../../module/navigator/navigator'
    import PageUrl from '../../config/page_url_config'
    export default {
        data () {
            return {

            }
        },
        methods: {
            onPressHandle () {
                navigator.push({ url: PageUrl['link'] });
            }
        },
        components: {
            WovView,
            WovCell
        }
    }
</script>

<style>
    .about-view{
        background-color: #fbf9fe;
    }
    .container-inner{
        width: 750px;
        border-bottom-color: #ddd;
        border-bottom-width: 2px;
        border-bottom-style: solid;
    }
</style>
