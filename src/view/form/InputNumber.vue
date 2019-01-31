<template>
    <div>
        <h4>基础用法</h4>
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <div class="el-hr"></div>

        <h4>禁用状态</h4>
        <el-input-number v-model="num2" :disabled="true"></el-input-number>
        <div class="el-hr"></div>

        <h4>步数控制</h4>
        <el-input-number v-model="num3" :step="5"></el-input-number>
        <div class="el-hr"></div>

        <h4>精度控制</h4>
        <el-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></el-input-number>
        <div class="el-hr"></div>

        <h4>尺寸</h4>
        <el-input-number v-model="num4"></el-input-number>
        <el-input-number size="medium" v-model="num5"></el-input-number>
        <el-input-number size="small" v-model="num6"></el-input-number>
        <el-input-number size="mini" v-model="num7"></el-input-number>
        <div class="el-hr"></div>

        <h4>按钮位置</h4>
        <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
        <div class="el-hr"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                num1:1,
                num2:2,
                num3:0,
                num9:1,
                num4: 1,
                num5: 1,
                num6: 1,
                num7: 1,
                num8: 1
            }
        },
        methods:{
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>
<style scoped>
    h4{color: #303133;margin:0 0 20px 0}

</style>