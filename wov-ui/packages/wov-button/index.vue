<template>
    <div @click="pressHandle">
        <slot></slot>
    </div>
</template>

<script>
    import config from './config'
    export default {
        name: 'wov-button',
        props: {
            button_disabled: { default: config.button_disabled },
            button_delay: { default: config.button_delay }
        },
        methods: {
            pressHandle () {
                !this.button_disabled && this.$emit('onPress', ()=>{
                    setTimeout(() => {
                        this.button_disabled = false;
                    }, +this.button_delay);
                });
                this.button_disabled = true;
            }
        }
    }
</script>
