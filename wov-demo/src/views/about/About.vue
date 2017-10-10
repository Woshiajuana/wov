<template>
    <wov-view
        class="about-view"
        :is_header="false">

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
</style>
