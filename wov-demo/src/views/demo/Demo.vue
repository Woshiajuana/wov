<template>
    <wov-view
        class="demo-view"
        :is_header="false">
        <div class="view-inner">
            <div class="demo-item"><text>1</text></div>
            <div class="demo-item"><text>2</text></div>
            <div class="demo-item"><text>3</text></div>
            <div class="demo-item"><text>4</text></div>
            <div class="demo-item"><text>5</text></div>
            <div class="demo-item"><text>6</text></div>
            <div class="demo-item"><text>7</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>
            <div class="demo-item"><text>8</text></div>

        </div>
        <div class="prompt-wrap">
            <text class="prompt-text">没有啦~~~</text>
        </div>
    </wov-view>
</template>

<script>
    import { WovView } from 'wov'
    export default {
        data () {
            return {}
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
        flex-direction: row;
        flex-wrap: wrap;
    }
    .demo-item{
        width: 250px;
        height: 250px;
        border-width: 2px;
        border-color: #999;
        border-style: solid;
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
        font-size: 32px;
        color: #999;
    }
</style>
