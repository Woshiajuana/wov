<template>
    <div @click="pressHandle">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        name: 'wov-button',
        props: {
            disabled: { default: false },
            delay: { default: 0 }
        },
        methods: {
            pressHandle () {
                !this.disabled && this.$emit('onPress', ()=>{
                    setTimeout(() => {
                        this.disabled = false;
                    }, +this.delay);
                });
                this.disabled = true;
            }
        }
    }
</script>
