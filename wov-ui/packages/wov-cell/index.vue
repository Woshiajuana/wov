<template>
    <div class="cell-wrap"
         :style="{height: cell_height,
         backgroundColor: cell_background_color,
         paddingLeft: cell_padding_left,
         paddingRight: cell_padding_right,
         borderBottomWidth: cell_border_width,
         borderBottomColor: cell_border_color}">
        <image class="cell-img"
               v-if="cell_left_src"
               :src="cell_left_src"
               :style="{height: cell_left_src_size[1],
               width: cell_left_src_size[0],
               marginLeft: cell_left_src_mar_left,
               marginRight: cell_left_src_mar_right}">
        </image>
        <div class="cell-inner"
             :style="{height: cell_height,
              paddingLeft: cell_inner_padding_left,
              paddingRight: cell_inner_padding_right,
              borderBottomWidth: cell_inner_border_width,
              borderBottomColor: cell_inner_border_color}">
            <div v-if="cell_left_width" class="cell-left" :style="{width: cell_left_width}">
                <text class="cell-left-text"
                      :style="{color:cell_left_color,
                      fontSize:cell_left_size}">{{cell_left_txt}}</text>
                <text class="cell-left-text"
                      v-if="cell_left_txt_sub"
                      :style="{color:cell_left_color_sub,
                      marginTop: cell_left_sub_mar_top,
                      fontSize:cell_left_size_sub}">{{cell_left_txt_sub}}</text>
            </div>
            <div v-if="!cell_left_width" class="cell-left">
                <text class="cell-left-text"
                      :style="{color:cell_left_color,
                      fontSize:cell_left_size}">{{cell_left_txt}}</text>
                <text class="cell-left-text"
                      v-if="cell_left_txt_sub"
                      :style="{color:cell_left_color_sub,
                      marginTop: cell_left_sub_mar_top,
                      fontSize:cell_left_size_sub}">{{cell_left_txt_sub}}</text>
            </div>
            <div v-if="!cell_use_input" class="cell-right">
                <text class="cell-right-text"
                      :style="{color:cell_right_color,
                      textAlign: cell_right_text_align,
                      fontSize:cell_right_size}">{{cell_right_txt}}</text>
            </div>
            <input v-if="cell_use_input && cell_input_type == 'text'" class="cell-right cell-input"
                   :style="{color:cell_right_color,
                   marginTop: cell_input_mar_top,
                   height: (+cell_height - 4),
                   lineHeight: (+cell_height - 4),
                   textAlign: cell_right_text_align,
                   fontSize:cell_right_size}"
                   @input="inputHandle"
                   v-model="right_input"
                   :maxlength="cell_input_max"
                   :disabled="cell_input_disabled"
                   :placeholder="cell_input_placeholder" type="text"/>
            <input v-if="cell_use_input  && cell_input_type == 'password'" class="cell-right cell-input"
                   :style="{color:cell_right_color,
                   marginTop: cell_input_mar_top,
                   height: (+cell_height - 4),
                   lineHeight: (+cell_height - 4),
                   textAlign: cell_right_text_align,
                   fontSize:cell_right_size}"
                   @input="inputHandle"
                   v-model="right_input"
                   :maxlength="cell_input_max"
                   :disabled="cell_input_disabled"
                   :placeholder="cell_input_placeholder" type="password"/>
            <input v-if="cell_use_input  && cell_input_type == 'date'" class="cell-right cell-input"
                   :style="{color:cell_right_color,
                   marginTop: cell_input_mar_top,
                   height: (+cell_height - 4),
                   lineHeight: (+cell_height - 4),
                   textAlign: cell_right_text_align,
                   fontSize:cell_right_size}"
                   @input="inputHandle"
                   v-model="right_input"
                   :maxlength="cell_input_max"
                   :disabled="cell_input_disabled"
                   :placeholder="cell_input_placeholder" type="date"/>
            <image class="cell-img"
                   @click="cellRightSrcClickHandle"
                   v-if="cell_right_src"
                   :src="cell_right_src"
                   :style="{height: cell_right_src_size[1],
               width: cell_right_src_size[0],
               marginLeft: cell_right_src_mar_left,
               marginRight: cell_right_src_mar_right}">
            </image>
            <div v-if="cell_use_arrow" class="cell-arrow"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                right_input: ''
            }
        },
        props: {
            cell_use_arrow: { default: true },
            cell_height: { default: 90 },
            cell_left_txt: { default: '' },
            cell_left_txt_sub: { default: '' },
            cell_background_color: { default: '' },
            cell_left_color: { default: '' },
            cell_left_color_sub: { default: '' },
            cell_left_size: { default: 28 },
            cell_left_size_sub: { default: 28 },
            cell_left_width: { default: ''},
            cell_right_txt: { default: '' },
            cell_right_color: { default: '#000' },
            cell_right_size: { default: 28 },
            cell_left_src: { default: '' },
            cell_left_src_mar_left: { default: '' },
            cell_left_src_mar_right: { default: '' },
            cell_left_src_size: { default: [36,36] },
            cell_padding_left: { default: 0 },
            cell_padding_right: { default: 0 },
            cell_inner_padding_left: { default: 0 },
            cell_inner_padding_right: { default: 0 },
            cell_border_width: { default: 2 },
            cell_border_color: { default: '#ddd' },
            cell_inner_border_width: { default: 0 },
            cell_inner_border_color: { default: '#ddd'},
            cell_right_src: { default: '' },
            cell_right_src_size: { default: [36,36] },
            cell_right_src_mar_left: { default: 0 },
            cell_right_src_mar_right: { default: 0 },
            cell_use_input: { default: false },
            cell_input_disabled: { default: false },
            cell_input_type: { default: 'text' },
            cell_input_placeholder: { default: '请输入' },
            cell_input_max: { default: '' },
            cell_right_text_align: { default: 'right' },
            cell_input_mar_top: { default: 0 },
            cell_left_sub_mar_top: { default: 0 },
        },
        created () {
            this.right_input = this.cell_right_txt;
        },
        methods: {
            inputHandle () {
                this.$emit('input',this.right_input);
            },
            cellRightSrcClickHandle () {
                this.$emit('cellRightSrcClick')
            }
        }
    }
</script>

<style>
    .cell-wrap{
        flex-direction: row;
        align-cells: center;
    }
    .cell-inner{
        flex: 1;
        flex-direction: row;
        align-cells: center;
    }
    .cell-right{
        flex: 1;
        flex-direction: row;
    }
    .cell-right-text{
        flex: 1;
    }
    .cell-input{
        text-align: right;
        margin-bottom: 8px;
        padding-left: 20px;
    }
    .cell-left-text{
        flex: 1;
    }
    .cell-arrow{
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
