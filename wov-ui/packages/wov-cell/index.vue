<template>
    <div class="item-wrap"
         :style="{height: item_height,
         backgroundColor: item_background_color,
         paddingLeft: item_padding_left,
         paddingRight: item_padding_right,
         borderBottomWidth: item_border_width,
         borderBottomColor: item_border_color}">
        <image class="item-img"
               v-if="item_left_src"
               :src="item_left_src"
               :style="{height: item_left_src_size[1],
               width: item_left_src_size[0],
               marginLeft: item_left_src_mar_left,
               marginRight: item_left_src_mar_right}">
        </image>
        <div class="item-inner"
             :style="{height: item_height,
              paddingLeft: item_inner_padding_left,
              paddingRight: item_inner_padding_right,
              borderBottomWidth: item_inner_border_width,
              borderBottomColor: item_inner_border_color}">
            <div class="item-left" :style="{width: item_left_width}">
                <text class="item-left-text"
                      :style="{color:item_left_color,
                      fontSize:item_left_size}">{{item_left_txt}}</text>
            </div>
            <div v-if="!item_use_input" class="item-right">
                <text class="item-right-text"
                      :style="{color:item_right_color,
                      fontSize:item_right_size}">{{item_right_txt}}</text>
            </div>
            <input v-if="item_use_input && item_input_type == 'text'" class="item-right item-input"
                   :style="{color:item_right_color,
                   fontSize:item_right_size}"
                   @input="onputHandle"
                   v-model="right_input"
                   :maxlength="item_input_max"
                   :placeholder="item_input_placeholder" type="text"/>
            <input v-if="item_use_input  && item_input_type == 'password'" class="item-right item-input"
                   :style="{color:item_right_color,
                   fontSize:item_right_size}"
                   @input="onputHandle"
                   v-model="right_input"
                   :maxlength="item_input_max"
                   :placeholder="item_input_placeholder" type="password"/>
            <image class="item-img"
                   v-if="item_right_src"
                   :src="item_right_src"
                   :style="{height: item_right_src_size[1],
               width: item_right_src_size[0],
               marginLeft: item_right_src_mar_left,
               marginRight: item_right_src_mar_right}">
            </image>
            <div v-if="item_use_arrow" class="item-arrow"></div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data () {
            return {
                right_input: ''
            }
        },
        props: {
            item_use_arrow: { default: true },
            item_height: { default: 90 },
            item_left_txt: { default: '' },
            item_background_color: { default: '' },
            item_left_color: { default: '' },
            item_left_size: { default: 28 },
            item_left_width: { default: ''},
            item_right_txt: { default: '' },
            item_right_color: { default: '#000' },
            item_right_size: { default: 28 },
            item_left_src: { default: '' },
            item_left_src_mar_left: { default: '' },
            item_left_src_mar_right: { default: '' },
            item_left_src_size: { default: [36,36] },
            item_padding_left: { default: 0 },
            item_padding_right: { default: 0 },
            item_inner_padding_left: { default: 0 },
            item_inner_padding_right: { default: 0 },
            item_border_width: { default: 2 },
            item_border_color: { default: '#ddd' },
            item_inner_border_width: { default: 0 },
            item_inner_border_color: { default: '#ddd'},
            item_right_src: { default: '' },
            item_right_src_size: { default: [36,36] },
            item_right_src_mar_left: { default: 0 },
            item_right_src_mar_right: { default: 0 },
            item_use_input: { default: false },
            item_input_type: { default: 'text' },
            item_input_placeholder: { default: '请输入' },
            item_input_max: { default: '' },
        },
        created () {
            this.right_input = this.item_right_txt;
        },
        methods: {
            onputHandle () {
                this.$emit('onput',this.right_input);
            }
        }
    }
</script>

<style>
    .item-wrap{
        flex-direction: row;
        align-items: center;
    }
    .item-inner{
        flex: 1;
        flex-direction: row;
        align-items: center;
    }
    .item-right{
        flex: 1;
        flex-direction: row;
        justify-content: flex-end;
    }
    .item-input{
        text-align: right;
        margin-bottom: 8px;
        padding-left: 20px;
    }
    .item-arrow{
        width: 16px;
        height: 16px;
        margin-right: 25px;
        margin-left: 25px;
        border-top-width: 3px;
        border-top-style: solid;
        border-right-width: 3px;
        border-right-style: solid;
        border-color: #979797;
        transform: rotate(45deg);
    }
</style>
