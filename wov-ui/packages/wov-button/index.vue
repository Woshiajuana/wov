<template>
    <div @click="pressHandle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'wov-button',
        props: {
            button_disabled: { default: false },
            button_delay: { default: 0 }
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
