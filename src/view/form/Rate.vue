<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
        </div>
        <div class="el-hr"></div>

        <h4 class="el-h4">辅助文字</h4>
        <el-rate
                v-model="value3"
                show-text>
        </el-rate>
        <div class="el-hr"></div>

        <h4 class="el-h4">自定义icon</h4>
        <el-rate
                v-model="value4"
                :icon-classes="['el-icon-time', 'el-icon-bell', 'el-icon-mobile-phone']"
                void-icon-class="el-icon-error"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <div class="el-hr"></div>

        <h4 class="el-h4">只读</h4>
        <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
        </el-rate>

        <div class="el-hr"></div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                value1: null,
                value2: null,
                value3:null,
                value4 :null,
                value5: 3.7

            }
        }
    }
</script>
<style scoped>
    .block{display: inline-block;margin-right: 15px;margin-bottom: 15px;}

</style>