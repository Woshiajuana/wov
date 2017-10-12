<template>
    <wov-view
        class="about-view"
        nav_background_color="#fbf9fe"
        left_item_img_src=""
        center_item_title="关于">
        <div class="container-inner">

        </div>
    </wov-view>
</template>

<script>
    import { WovView } from 'wov'
    import source from '../../assets/lib/source'
    export default {
        data () {
            return {

            }
        },
        components: {
            WovView
        }
    }
</script>

<style>
    .about-view{
        background-color: #fbf9fe;
    }
    .container-inner{
        align-items: center;
    }
    .about-title{
        line-height: 90px;
        font-size: 42px;
        color: #333;
    }
</style>
