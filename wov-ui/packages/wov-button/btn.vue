<template>
    <div @click="pressHandle">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        name: 'btn',
        props: {
            type: { default: true }
        },
        methods: {
            pressHandle () {
                this.type && this.$emit('onPress', ()=>{
                    this.type = true;
                });
                this.type = false;
            }
        }
    }
</script>
