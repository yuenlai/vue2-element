<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
        <div class="el-hr"></div>

        <h4 class="el-h4">简单卡片</h4>
        <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
        <div class="el-hr"></div>

        <h4 class="el-h4">带图片</h4>
        <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../../images/pkq.png" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div class="el-hr"></div>

        <h4 class="el-h4">卡片阴影</h4>
        <el-row :gutter="12">
            <el-col :span="8">
                <el-card shadow="always">
                    总是显示
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">
                    鼠标悬浮时显示
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="never">
                    从不显示
                </el-card>
            </el-col>
        </el-row>
        <div class="el-hr"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                currentDate: new Date()
            }
        }
    }
</script>
<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
    .image{width: 200px;}
</style>