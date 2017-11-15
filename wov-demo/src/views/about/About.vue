<template>
    <wov-view class="about-view"
              view_header_left_src=""
              view_header_center_txt="关于">
        <div class="container-inner">
            <wov-cell cell_left_txt="Name"
                      cell_right_txt="wov"
                      :cell_use_arrow="false"
                      cell_border_width="2">
            </wov-cell>
            <wov-cell cell_left_txt="Version"
                      cell_right_txt="0.0.14"
                      :cell_use_arrow="false"
                      cell_border_width="2">
            </wov-cell>
            <wov-cell cell_left_txt="Introduction"
                      cell_right_txt="A Weex UI"
                      :cell_use_arrow="false"
                      cell_border_width="2">
            </wov-cell>
            <wov-cell cell_left_txt="Author"
                      cell_right_txt="Woshiajuana"
                      :cell_use_arrow="false"
                      cell_border_width="2">
            </wov-cell>
            <wov-cell cell_left_txt="E-Mail"
                      cell_right_txt="zhigang.chen@owulia.com"
                      :cell_use_arrow="false"
                      cell_border_width="2">
            </wov-cell>
            <wov-cell cell_left_txt="Links"
                      cell_right_txt=""
                      @click.native="onPressHandle"
                      cell_border_width="0">
            </wov-cell>
        </div>
    </wov-view>
</template>

<script>
    import WovView from '../../components/wov/packages/wov-view'
    import WovCell from '../../components/wov/packages/wov-cell'
    import navigator from '../../module/navigator'
    import PageUrl from '../../config/page_url_config'
    export default {
        data () {
            return {

            }
        },
        methods: {
            onPressHandle () {
                navigator.push('link');
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
