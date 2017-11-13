<template>
    <wov-view class="about-view"
              :view_header_left_src="left_item_img_src"
              view_header_center_txt="友情链接">
        <div class="container-inner">
            <wov-cell cell_left_txt="Weex"
                      :cell_use_arrow="false"
                      :cell_right_src="arrow_img_src"
                      @click.native="onPressHandle('Weex')"
                      cell_border_width="2">
            </wov-cell>
            <wov-cell cell_left_txt="Vue"
                      :cell_use_arrow="false"
                      :cell_right_src="arrow_img_src"
                      @click.native="onPressHandle('Vue')"
                      cell_border_width="2">
            </wov-cell>
            <wov-cell cell_left_txt="Owulia"
                      :cell_use_arrow="false"
                      :cell_right_src="arrow_img_src"
                      @click.native="onPressHandle('Owulia')"
                      cell_border_width="0">
            </wov-cell>
        </div>
    </wov-view>
</template>

<script>
    import WovView from '../../components/wov/packages/wov-view'
    import WovCell from '../../components/wov/packages/wov-cell'
    import source from '../../assets/lib/source'
    import navigator from '../../module/navigator/navigator'
    export default {
        data () {
            return {
                arrow_img_src: source('right-arrow-icon.png'),
                left_item_img_src: source('return-icon.png')
            }
        },
        methods: {
            onPressHandle ( page_name ) {
                switch (page_name) {
                    case 'Weex':
                        navigator.push('webview', {
                            link: 'https://weex.apache.org/cn/'
                        });
                        break;
                    case 'Vue':
                        navigator.push('webview', {
                            link: 'https://cn.vuejs.org/v2/guide/'
                        });
                        break;
                    case 'Owulia':
                        navigator.push('webview', {
                            link: 'http://www.owulia.com/'
                        });
                        break;
                }
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
