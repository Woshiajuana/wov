<template>
    <wov-view class="demo-view"
              :view_use_header="false">
        <div class="view-inner">
            <div class="demo-item border-bottom"
                 :class="[((index + 1) % 3 != 0) && 'border-right']"
                 @click="onPressHandle(item.src_name)"
                v-for="(item, index) in demo_arr" :key="index">
                <image class="demo-item-img" :src="item.img_src"></image>
                <text class="demo-item-name">{{item.name}}</text>
            </div>
        </div>
        <div class="prompt-wrap">
            <text class="prompt-text">~~~ No More ~~~</text>
        </div>
    </wov-view>
</template>

<script>
    import WovView from '../../components/wov/packages/wov-view'
    import source from '../../assets/lib/source'
    import navigator from '../../module/navigator'
    import PageUrl from '../../config/page_url_config'
    export default {
        data () {
            return {//20A0FF
                demo_arr: [
                    { img_src: source('navbar-icon.png'), name: 'WovNavbar', src_name: 'navbar' },
                    { img_src: source('view-icon.png'), name: 'WovView', src_name: 'view' },
                    { img_src: source('cell-icon.png'), name: 'WovCell', src_name: 'cell' },
                    { img_src: source('btn-icon.png'), name: 'WovBtn', src_name: 'button' },
                    { img_src: source('web-icon.png'), name: 'WovWebview', src_name: 'web' },
                ]
            }
        },
        methods: {
            onPressHandle (src_name) {
                navigator.push(src_name);
            }
        },
        components: {
            WovView
        }
    }
</script>

<style>
    .demo-view{
        background-color: #fbf9fe;
    }
    .view-inner{
        flex-direction: row;
        flex-wrap: wrap;
    }
    .demo-item{
        width: 250px;
        height: 250px;
        background-color: #fff;
        border-color: #f2f2f2;
        border-style: solid;
        justify-content: center;
        align-items: center;
    }
    .demo-item:active{
        background-color: #ddd;
    }
    .border-bottom{
        border-bottom-width: 2px;
    }
    .border-right{
        border-right-width: 2px;
    }
    .demo-item-img{
        width: 60px;
        height: 60px;
    }
    .demo-item-name{
        text-align: center;
        font-size: 24px;
        margin-top: 20px;
        color: #333;
    }
    .prompt-wrap{
        padding-bottom: 80px;
        padding-top: 80px;
        height: 50px;
        align-items: center;
        justify-content: center;
    }
    .prompt-text{
        text-align: center;
        font-size: 24px;
        color: #999;
    }
</style>
