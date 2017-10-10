<template>
    <wov-view
        :is_header="false">
        <div class="logo-wrap">
            <image class="logo-icon" :src="logo_src"></image>
            <text class="version-text">v0.0.7</text>
        </div>
        <wov-item
            left_text="GitHub"
            right_text="Star Me"
            :height="100"
            :left_img_src="git_img_src"
            :left_img_width_and_height="[60,60]"
            @onPress="onPressHandle('GitHub')">
        </wov-item>
        <wov-item
            left_text="Blog"
            right_text="Welcome"
            :height="100"
            :left_img_src="blog_img_src"
            :left_img_width_and_height="[60,60]"
            @onPress="onPressHandle('Blog')">
        </wov-item>
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
                git_img_src: source('github-icon.png'),
                blog_img_src: source('blog-icon.png')
            }
        },
        methods: {
            onPressHandle ( page_name ) {
                switch (page_name) {
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
</style>
