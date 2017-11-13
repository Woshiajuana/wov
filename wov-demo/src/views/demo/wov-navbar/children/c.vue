<template>
    <wov-view :view_use_header="false">
        <div class="view-inner">
            <text class="prompt-text">C页面</text>
        </div>
    </wov-view>
</template>
<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    export default {
        components: {
            WovView
        }
    }
</script>
<style>
    .view-inner{
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .prompt-text{
        font-size: 36px;
        color: #3c3c3c;
    }
</style>