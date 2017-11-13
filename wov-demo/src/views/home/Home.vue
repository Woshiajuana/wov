<template>
    <wov-view view_background_color="#fbf9fe"
              :view_use_header="false">
        <div class="logo-wrap">
            <image class="logo-icon" :src="logo_src"></image>
            <text class="version-text">v0.0.14</text>
        </div>
        <div class="main-wrap">
            <wov-cell cell_left_txt="Official"
                      cell_right_txt="Enter"
                      :cell_use_arrow="false"
                      cell_height="100"
                      :cell_right_src="arrow_img_src"
                      :cell_left_src="official_img_src"
                      cell_border_width="2"
                      :cell_left_src_size="[60,60]"
                      @click.native="onPressHandle('Official')">
            </wov-cell>
            <wov-cell cell_left_txt="GitHub"
                      cell_right_txt="Star Me"
                      :cell_use_arrow="false"
                      cell_height="100"
                      :cell_right_src="arrow_img_src"
                      :cell_left_src="git_img_src"
                      cell_border_width="2"
                      :cell_left_src_size="[60,60]"
                      @click.native="onPressHandle('GitHub')">
            </wov-cell>
            <wov-cell cell_left_txt="Blog"
                      cell_right_txt="Welcome"
                      :cell_use_arrow="false"
                      cell_height="100"
                      :cell_right_src="arrow_img_src"
                      :cell_left_src="blog_img_src"
                      cell_border_width="0"
                      :cell_left_src_size="[60,60]"
                      @click.native="onPressHandle('Blog')">
            </wov-cell>
        </div>
        <div class="reminder-wrap">
            <text class="reminder-text">©2017 Woshiajuana o(∩_∩)o </text>
        </div>
    </wov-view>
</template>

<script>
    import WovView from '../../components/wov/packages/wov-view'
    import WovCell from '../../components/wov/packages/wov-cell'
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
            WovCell
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
        background-color: #fff;
        border-top-color: #ddd;
        border-top-width: 2px;
        border-top-style: solid;
        border-bottom-color: #ddd;
        border-bottom-width: 2px;
        border-bottom-style: solid;
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
