<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <div class="block">
            <span class="demonstration">有默认值：  </span>
            <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
            <span class="demonstration">无默认值：  </span>
            <el-color-picker v-model="color2"></el-color-picker>
        </div>
        <div class="el-hr"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                color1: '#409EFF',
                color2: null
            }
        }
    }
</script>
<style scoped>
    .block{display: inline-block;margin-right: 15px;margin-bottom: 15px;}
    .demonstration{position: relative;top:-14px;}
</style>
