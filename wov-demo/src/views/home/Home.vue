<template>
    <wov-view
        :is_header="false"
        backgroundColor="#fbf9fe">
        <div class="logo-wrap">
            <image class="logo-icon" :src="logo_src"></image>
            <text class="version-text">v0.0.7</text>
        </div>
        <div class="main-wrap">
            <wov-item
                    left_text="Official"
                    right_text="Enter"
                    :is_arrow="false"
                    :height="100"
                    :right_img_src="arrow_img_src"
                    :left_img_src="official_img_src"
                    :border_bottom_width="2"
                    :left_img_width_and_height="[60,60]"
                    @onPress="onPressHandle('Official')">
            </wov-item>
            <wov-item
                    left_text="GitHub"
                    right_text="Star Me"
                    :is_arrow="false"
                    :height="100"
                    :right_img_src="arrow_img_src"
                    :left_img_src="git_img_src"
                    :border_bottom_width="2"
                    :left_img_width_and_height="[60,60]"
                    @onPress="onPressHandle('GitHub')">
            </wov-item>
            <wov-item
                    left_text="Blog"
                    right_text="Welcome"
                    :is_arrow="false"
                    :height="100"
                    :right_img_src="arrow_img_src"
                    :left_img_src="blog_img_src"
                    :border_bottom_width="0"
                    :left_img_width_and_height="[60,60]"
                    @onPress="onPressHandle('Blog')">
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
                logo_src: source('wov-icon.png'),
                official_img_src: source('official-icon.png'),
                git_img_src: source('github-icon.png'),
                blog_img_src: source('blog-icon.png'),
                arrow_img_src: source('right-arrow-icon.png')
            }
        },
        methods: {
            onPressHandle ( page_name ) {
                switch (page_name) {
                    case 'Official':
                        navigator.push({ url: PageUrl['webview'] },{
                            link: 'https://github.com/Woshiajuana/wov/'
                        });
                        break;
                    case 'GitHub':
                        navigator.push({ url: PageUrl['webview'] },{
                            link: 'https://github.com/Woshiajuana/wov/'
                        });
                        break;
                    case 'Blog':
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
    .logo-wrap{
        width: 750px;
        padding-top: 120px;
        padding-bottom: 80px;
        justify-content: center;
        align-items: center;
    }
    .logo-icon{
        width: 180px;
        height: 180px;
    }
    .version-text{
        margin-top: 20px;
        font-size: 36px;
        color: #999;
    }
    .main-wrap{
        border-top-color: #ddd;
        border-top-width: 2px;
        border-top-style: solid;
        border-bottom-color: #ddd;
        border-bottom-width: 2px;
        border-bottom-style: solid;
    }
</style>
