<template>
    <wov-view
        :is_header="false"
        :is_refresh="true"
        :is_load="true"
        background_color="red"
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
                    if(this.rows >= 30) {
                        this.$refs.scroller.banLoad();
                    }
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
    .home-header-search-link{
        background-color: #fff;
        margin-top: 20px;
        margin-left: 32px;
        margin-right: 32px;
        height: 72px;
        border-radius: 72px;
        box-shadow: 0 6px 6px 0 rgba(0,0,0,.2);
    }
    .home-header-search-link-txt{
        text-align: center;
        color: #333;
        font-size: 28px;
        line-height: 72px;
    }
    .home-header-top{
        position: relative;
        color: #f2f2f2;
        height: 70px;
        line-height: 70px;
    }
    .home-header-top-date{
        position: absolute;
        top: 0;
        height: 70px;
        left: 40px;
        padding-left: 60px;
    }
    .home-header-top-date:after{
        position: absolute;
        right: -30px;
        content: '';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top:  6px solid #f2f2f2;
    }
    .home-header-top-date-con{
        position: absolute;
        left: 0;
        top: 13px;
        height: 44px;
        width: 44px;
    }
    .home-header-top-date-con-day-txt{
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 22px;
    }
    .home-header-top-date-txt{
        line-height: 70px;
        font-size: 28px;
        color: #fff;
    }
    .home-header-date-icon{
        position: absolute;
        height: 48px;
        width: 48px;
        left: 0;
        top: 0;
    }
    .home-header-top-filter-btn{
        position: absolute;
        height: 50px;
        width: 50px;
        top: 10px;
        right: 40px;
    }
</style>
