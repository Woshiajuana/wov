<template>
    <wov-view
        :is_header="false"
        :is_refresh="true"
        :is_load="true"
        @refresh="refreshHandle"
        @load="loadHandle"
        @pullingDown="pullingDownHandle"
        @pullingUp="pullingUpHandle"
        ref="scroller">
        <image src=""></image>
    </wov-view>
</template>

<script>
    import { WovView } from 'wov'
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

</style>
