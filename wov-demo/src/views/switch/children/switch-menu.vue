<template>
    <wov-switch>

    </wov-switch>
</template>

<script>
    import { WovSwitch } from 'wov'
    export default {
        data () {
            return {
                switch_page_arr: [{
                    txt: 'HOME',
                    img_src: source('home-icon.png'),
                    img_checked_src: source('home-checked-icon.png'),
                    visibility: 'visible',
                    checked: true
                },
                    {
                        txt: 'DEMO',
                        visibility: 'hidden',
                        img_src: source('demo-icon.png'),
                        img_checked_src: source('demo-checked-icon.png'),
                        checked: false
                    },
                    {
                        txt: 'ABOUT',
                        visibility: 'hidden',
                        img_src: source('about-icon.png'),
                        img_checked_src: source('about-checked-icon.png'),
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