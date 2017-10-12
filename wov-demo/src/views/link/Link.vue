<template>
    <wov-view
        class="about-view"
        nav_background_color="#fbf9fe"
        left_item_img_src=""
        center_item_title="关于">
        <div class="container-inner">
            <wov-item
                left_text="Name"
                right_text="wov"
                :is_arrow="false"
                height="100"
                border_bottom_width="2">
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
