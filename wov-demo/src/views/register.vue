<template>
    <div class="register_wrap">
        <!--<div class="register_title">-->
        <!--<image class="back_icon" @click="close" :src="back_btn"></image>-->
        <!--<text class="text_title">注册</text>-->
        <!--</div>-->
        <!--<div class="register_input">-->
        <!--<image class="img_icon" :src="login_phone"></image>-->
        <!--<input ref="input_num" maxlength="11" type="text" class="input" :value="inputvalue"  placeholder="请输入手机号码" @change="change" @input="input_phoneNum" @focus="focus"/>-->
        <!--<image class="hide_del" v-if="hide_del_num" @click="del_num" :src="hide_del"></image>-->
        <!--</div>-->
        <!--<div class="register_input">-->
        <!--<image class="img_icon_special" :src="register_code"></image>-->
        <!--<input maxlength="6" type="text"  class="input" :value="code_value"  placeholder="短信验证码" @input="input_password"/>-->
        <!--<image class="img_border" :src="img_border"></image>-->
        <!--<text class="code" v-if="type">获取验证码</text>-->
        <!--</div>-->
        <div class="register_agree">
            <text class="agree_text" @click="onClick">点击下一步，即表示已阅读并同意1</text>
            <text>{{count}}</text>
            <!--<text class="agree" @click="agree">《优米服务协议》</text>-->
        </div>
        <!--<div class="register_btn">-->
        <!--<text class="primary_btn" v-if="fullInfo">下一步</text>-->
        <!--<text class="fullInfo_btn" v-else @click="login">下一步</text>-->
        <!--</div>-->
        <!--<div class="noregister">-->
        <!--<text class="noregister_text">我不想注册，先看看再说</text>-->
        <!--</div>-->
        <text @click="onClick">点击我改变</text>
        <text @click="onClick" v-if="type">隐藏我</text>
        <text @click="onClick" v-if="!type">显示我</text>
    </div>
</template>

<script>
    //import source from '../util/source.js'
    const navigator=weex.requireModule('navigator')
    const source = function () {
        return ''
    }
    export default {
        data(){
            return{
                hide_del_num:false,
                inputvalue:'',
                code_value:'',
                fullInfo:false,
                type: true,
                count: 60,
                timer: ''
            }
        },
        computed:{
            back_btn:function(){
                return source('nav_back.png')
            },
            hide_del:function(){
                return source('logo_clear.png')
            },
            login_phone:function(){
                return source('logo_icon_phone.png')
            },
            register_code:function(){
                return source('register_icon_password.png')
            },
            img_border:function(){
                return source('my_line.png')
            },
        },
        methods:{
            onClick() {
                this.type = !this.type;
                this.timer = setInterval(() => {
                    this.count--;
                },1000)
            },
            input_phoneNum(e){
                this.inputvalue=e.value;
                if(this.inputvalue!=''){
                    this.hide_del_num=true;
                }else{
                    this.hide_del_num=false;
                }
                if(this.inputvalue!=='' && this.code_value!==''){
                    this.fullInfo=false
                }
            },
            close(){
                navigator.pop({
                    animated:true
                },callback=>{})
            }
        }
    }
</script>

<style scoped>
    .register_wrap{
        width: 750;
        background-color: #fff;
    }
    .register_title{
        width: 750;
        height: 100;
        background-color: #fff;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 50;
    }
    .back_icon{
        position: absolute;
        left: 20;
        top: 36;
        width: 24;
        height: 24;
    }
    .text_title{
        font-size: 36;
        font-family:PingFang-SC-Regular;
        color:#3a3a3a;
    }
    .register_input{
        width: 650;
        height: 80;
        border-bottom-width: 1;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
        margin-left: 50;
        margin-right: 50;
        margin-bottom: 50;
        flex-direction: row;
        align-items: center;
    }
    .img_icon{
        width: 38;
        height: 55;
        margin-left: 40;
        margin-right: 40;
    }
    .img_icon_special{
        width: 50;
        height: 40;
        margin-left: 28;
        margin-right: 40;
    }
    .input{
        width: 300;
        height: 50;
        placeholder-color:#ccc;
    }
    .hide_del{
        width: 30;
        height: 30;
        margin-left: 50;
    }
    .primary_btn{
        width: 650;
        height: 80;
        font-size: 36;
        text-align: center;
        line-height: 80;
        color: #fff;
        border-radius: 8;
        background-color: #ccc;
        margin-left: 50;
        margin-right: 50;
        margin-top: 50;
    }
    .fullInfo_btn{
        width: 650;
        height: 80;
        font-size: 36;
        text-align: center;
        line-height: 80;
        color: #fff;
        border-radius: 8;
        background-color:#FF484C;
        margin-left: 50;
        margin-right: 50;
        margin-top: 50;
    }
    .img_border{
        width: 1;
        height: 40;
        margin-right: 25;
        margin-left: 25
    }
    .code{
        font-size: 34;
        color: #F83E3E;
    }
    .register_agree{
        width: 650;
        margin-left: 50;
        margin-bottom: 60;
        flex-direction: row;
    }
    .agree_text{
        color: #ccc;
        font-size: 24;
    }
    .agree{
        font-size: 24;
        color: #F83E3E;
    }
    .noregister{
        width: 750;
        height: 100;
        margin-top: 550;
        align-items: center;
        justify-content: center;
    }
    .noregister_text{
        border-bottom-width:1;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
        color: #ccc;
        font-size: 34;
    }
</style>
