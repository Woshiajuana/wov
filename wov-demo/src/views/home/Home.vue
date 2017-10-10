<template>
    <wov-view
        :is_header="false">
        <div class="logo-wrap">
            <image class="logo-icon" :src="logo_src"></image>
            <text class="version-text">v0.0.7</text>
        </div>
        <wov-item
            left_text="GitHub"
            right_text="me"
            :height="100"
            @onPress="onPressHandle">
        </wov-item>
        <wov-item
            left_text="GitHub"
            :height="100"
            right_text="me">
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
                logo_src: source('wov-icon.png')
            }
        },
        methods: {
            onPressHandle () {
                navigator.push({ url: PageUrl['webview'] },{
                    link: 'https://github.com/Woshiajuana/wov/'
                })
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
