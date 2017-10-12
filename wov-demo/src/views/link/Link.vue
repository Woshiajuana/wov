<template>
    <wov-view
        class="about-view"
        nav_background_color="#fbf9fe"
        :left_item_img_src="left_item_img_src"
        center_item_title="友情链接">
        <div class="container-inner">
            <wov-item
                left_text="Weex"
                :is_arrow="false"
                :right_img_src="arrow_img_src"
                height="100"
                @onPress="onPressHandle('Weex')"
                border_bottom_width="2">
            </wov-item>
            <wov-item
                left_text="Vue"
                :is_arrow="false"
                :right_img_src="arrow_img_src"
                height="100"
                @onPress="onPressHandle('Vue')"
                border_bottom_width="2">
            </wov-item>
            <wov-item
                left_text="Owulia"
                :is_arrow="false"
                :right_img_src="arrow_img_src"
                height="100"
                @onPress="onPressHandle('Owulia')"
                border_bottom_width="0">
            </wov-item>
        </div>
    </wov-view>
</template>

<script>
    import { WovView, WovItem } from 'wov'
    import source from '../../assets/lib/source'
    import navigator from '../../module/navigator/navigator'
    import PageUrl from '../../config/page_url_config'
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
                        navigator.push({ url: PageUrl['webview'] },{
                            link: 'https://github.com/Woshiajuana/wov/'
                        });
                        break;
                    case 'Vue':
                        navigator.push({ url: PageUrl['webview'] },{
                            link: 'https://github.com/Woshiajuana/wov/'
                        });
                        break;
                    case 'Owulia':
                        navigator.push({ url: PageUrl['webview'] },{
                            link: 'http://www.owulia.com/ajuan/'
                        });
                        break;
                }
            }
        },
        components: {
            WovView,
            WovItem
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
