<template>
    <wov-view
        class="view"
        :left_item_img_src="icon"
        center_item_title="WovSwitch">
        <div class="main-wrap">
            <wov-item
                left_text="Official"
                right_text="Enter"
                :is_arrow="false"
                :height="100"
                :right_img_src="arrow_img_src"
                :border_bottom_width="0"
                :left_img_width_and_height="[60,60]"
                @onPress="onPressHandle('Official')">
            </wov-item>
        </div>
    </wov-view>
</template>

<script>
    import { WovView, WovItem } from 'wov'
    import source from '../../assets/lib/source'
    export default {
        data () {
            return {
                official_img_src: source('official-icon.png'),
                arrow_img_src: source('right-arrow-icon.png'),
                left: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAf1JREFUWAntmL0rRlEcx72EWEjKS0oUKRZZTAZllEUWI4NBmQwmJhkMLAZZGBgMKCv5AwyKEkVKSSjvkffPt/x0O930yNNzTnp+9e2c873POb/P/d3z3HufJyMjHekK/I8KFHAai+gOraJ8FEwIZh19RDSQLLqsPy6Ux/wV1OasI1jvkQvBGopWTv0t5P0S5wChyrlw23jFyGtkk30JuXA7eCVeyUiuPbuAXLg9vFLkNQQ3h1y4A7xyr2Qkz0SzyIU7xKtE3mMaAhfuGK/KOxkAU8iFO8GrCQFuIgbuFK82BLixGLgzvPoQ4EZj4C7wGlINp2+nG4MYk46pPfj25bn7UWOF6yfqRee/MGkT9aMHFBt6ZXKTpXo8bGS6+bpx4xoexoU/5Wzm4DVKddUs3y65Kwwwbg/qWBHaQE0aRGKZfg/SftRcE93v/k+e5bPPWGvzte6lBomE3kx0NnZm1s7jxW2NRNZM+mfKWHEfGZy1M3hWjaQn/e2Cehk4QgZnrR6BwUQ1JHr+Gpy148EQAlKH9KgzOGtHQoJsBEbfMoOzdigkSN16rmIgB0KCbAHm1oF8Z9wbEmQrMHqg22VWqxutbuTBRDskTygK+cq4MxhCQDrQM4pCnocEKJYupMoZ5D19/cAPKrqh0VvQI+oLiiwCo6rpf5t0pCuQaAU+AQjE6XRPS3R6AAAAAElFTkSuQmCC',
                icon: source('return-icon.png')
            }
        },
        methods: {
            onPressHandle () {

            }
        },
        components: {
            WovView,
            WovItem
        }
    }
</script>

<style>
    .view{
        background-color: #fbf9fe;
    }
    .main-wrap{
        margin-top: 320px;
        border-top-color: #ddd;
        border-top-width: 2px;
        border-top-style: solid;
        border-bottom-color: #ddd;
        border-bottom-width: 2px;
        border-bottom-style: solid;
    }
</style>
