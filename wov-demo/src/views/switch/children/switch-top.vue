<template>
    <wov-switch :switch_page_arr="switch_page_arr">

    </wov-switch>
</template>

<script>
    import { WovSwitch } from 'wov'
    export default {
        data () {
            return {
                switch_page_arr: [{
                    txt: 'HOME',
                    visibility: 'visible',
                    checked: true
                },
                {
                    txt: 'DEMO',
                    visibility: 'hidden',
                    checked: false
                },
                {
                    txt: 'ABOUT',
                    visibility: 'hidden',
                    checked: false
                }]
            }
        },
        components: {
            WovSwitch
        }
    }
</script>

<style>

</style>