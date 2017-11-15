<template>
    <wov-view :view_use_refresh="true"
              :view_use_load="true"
              ref="scroller"
              @refresh="refreshHandle"
              @load="loadHandle"
              view_header_center_txt="双行设置">
        <div class="cell-item" v-for="item in arr" :key="item"><text class="cell-item-text">{{item}}</text></div>
    </wov-view>
</template>
<script>
    import WovView from '../../../../components/wov/packages/wov-view'
    export default {
        data () {
            return {
                arr: 10
            }
        },
        methods: {
            refreshHandle () {
                setTimeout(() => {
                    this.arr = 10;
                    this.$refs.scroller.refreshed();
                    this.$refs.scroller.regainLoad();
                }, 2000)
            },
            loadHandle () {
                setTimeout(() => {
                    if(this.arr >= 30) {
                        this.$refs.scroller.banLoad();
                    } else {
                        this.arr += 10;
                    }
                    this.$refs.scroller.loaded();
                }, 1500)
            }
        },
        components: {
            WovView
        }
    }
</script>
<style>
    .cell-item{
        height: 150px;
        border-bottom-style: solid;
        border-bottom-color: #ddd;
        border-bottom-width: 2px;
        background-color: #fff;
        justify-content: center;
        align-items: center;
    }
    .cell-item-text{
        font-size: 32px;
        color: #3c3c3c;
    }
</style>