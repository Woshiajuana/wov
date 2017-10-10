<template>
    <wov-view
        :is_header="false">
        <div class="logo-wrap">
            <image class="logo-icon" :src="logo_src"></image>
            <text class="version-text">v0.0.5</text>
        </div>
    </wov-view>
</template>

<script>
    import { WovView } from 'wov'
    import source from '../../assets/lib/source'
    export default {
        data () {
            return {
                logo_src: source('wov-icon.png')
            }
        },
        components: {
            WovView
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
