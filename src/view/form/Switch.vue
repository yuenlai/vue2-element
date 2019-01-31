<template>
    <div>
        <h4>基础用法</h4>
        <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
        </el-switch>
        <div class="el-hr"></div>

        <h4>文字描述</h4>
        <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
        <el-switch
                style="display: block;margin-top: 15px;"
                v-model="value4"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
        <div class="el-hr"></div>

        <h4>扩展的value类型</h4>
        <el-tooltip :content="'Switch value: ' + value5" placement="top">
            <el-switch
                    v-model="value5"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="100"
                    inactive-value="0">
            </el-switch>
        </el-tooltip>
        <div class="el-hr"></div>

        <h4>禁用状态</h4>
        <el-switch
                v-model="value6"
                disabled>
        </el-switch>
        <el-switch
                v-model="value7"
                disabled>
        </el-switch>
        <div class="el-hr"></div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                value1: true,
                value2: true,
                value3: false,
                value4: true,
                value5: '100',
                value6: true,
                value7: false
            }
        }
    }
</script>
<style scoped>
    h4{color: #303133;margin:0 0 20px 0}

</style>