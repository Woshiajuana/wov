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
        <div class="home-header">
            <text @click="onClick">点击我改变</text>
            <text @click="onClick" v-if="type">隐藏我</text>
            <text @click="onClick" v-if="!type">显示我</text>
            <input v-model="value_input"/>
            <text>{{value_input}}</text>
            <div @click="getVe">
                <text class="code" v-if="verify_send">获取验证码</text>
            </div>
            <div>
                <text class="code-count" v-if="!verify_send">{{rows}}秒</text>
            </div>
        </div>
        <article-list-item v-for="item in rows" :key="item"></article-list-item>
    </wov-view>
</template>

<script>
    import { WovView } from 'wov'
    import ArticleListItem from '../../components/article-list-item.vue'
    export default {
        data () {
            return {
                rows: 10,
                type: true,
                value_input: '',
                verify_send: true
            }
        },
        watch: {

        },
        computed: {
            /**日期计算属性*/
            dateComputed () {
                return Tool.format('yyyy-MM-dd');
            },
            /**几号计算属性*/
            dayComputed () {
                return Tool.format('dd');
            }
        },
        created(){
            console.log(1)
        },
        methods: {
            getVe () {
                this.verify_send = !this.verify_send;
            },
            onClick () {
                this.type = !this.type;
            },
            /**下拉距离*/
            pullingDownHandle (event) {
            },
            /**上拉距离*/
            pullingUpHandle (event) {
            },
            refreshHandle () {
                setTimeout(() => {
                    this.rows = 10;
                    this.$refs.scroller.refreshed();
                    this.$refs.scroller.regainLoad();
                }, 2000)
            },
            loadHandle () {
                setTimeout(() => {
                    this.rows += 10;
//                    if(this.rows >= 30) {
//                        this.$refs.scroller.banLoad();
//                    }
                    this.$refs.scroller.loaded();
                }, 1500)
            },
            toSearchHandle () {
                navigator.push({url: PageUrl['search']})
            },
            filterHandle () {
                navigator.push({url: PageUrl['filter']})
            }
        },
        components: {
            ArticleListItem,
            WovView
        }
    }
</script>

<style>
    .home-header{
        width: 750px;
        height: 240px;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #58B7FF;
    }
</style>
