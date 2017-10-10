<template>
    <wov-view
        class="about-view"
        :left_item_img_src="icon"
        center_item_title="WovSwitch">

    </wov-view>
</template>

<script>
    import { WovView } from 'wov'
    import source from '../../assets/lib/source'
    export default {
        data () {
            return {
                left: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAf1JREFUWAntmL0rRlEcx72EWEjKS0oUKRZZTAZllEUWI4NBmQwmJhkMLAZZGBgMKCv5AwyKEkVKSSjvkffPt/x0O930yNNzTnp+9e2c873POb/P/d3z3HufJyMjHekK/I8KFHAai+gOraJ8FEwIZh19RDSQLLqsPy6Ux/wV1OasI1jvkQvBGopWTv0t5P0S5wChyrlw23jFyGtkk30JuXA7eCVeyUiuPbuAXLg9vFLkNQQ3h1y4A7xyr2Qkz0SzyIU7xKtE3mMaAhfuGK/KOxkAU8iFO8GrCQFuIgbuFK82BLixGLgzvPoQ4EZj4C7wGlINp2+nG4MYk46pPfj25bn7UWOF6yfqRee/MGkT9aMHFBt6ZXKTpXo8bGS6+bpx4xoexoU/5Wzm4DVKddUs3y65Kwwwbg/qWBHaQE0aRGKZfg/SftRcE93v/k+e5bPPWGvzte6lBomE3kx0NnZm1s7jxW2NRNZM+mfKWHEfGZy1M3hWjaQn/e2Cehk4QgZnrR6BwUQ1JHr+Gpy148EQAlKH9KgzOGtHQoJsBEbfMoOzdigkSN16rmIgB0KCbAHm1oF8Z9wbEmQrMHqg22VWqxutbuTBRDskTygK+cq4MxhCQDrQM4pCnocEKJYupMoZ5D19/cAPKrqh0VvQI+oLiiwCo6rpf5t0pCuQaAU+AQjE6XRPS3R6AAAAAElFTkSuQmCC',
                icon: source('return-icon.png')
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
</style>
