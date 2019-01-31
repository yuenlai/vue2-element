<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>欢迎来到主页</span>
            </div>
            <div v-for="(item, index) in infos" :key="index" class="text item">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
                {{item}}
            </div>
        </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                infos:[
                    "技术栈：vue、vuex、vueRouter、es6 、element、axios等",
                    "构建工具：Vue CLI 3（搭建脚手架，内置webpack）+ vue ui（图形化界面项目管理）",
                    "核心思想：数据驱动、数据劫持、发布订阅者模式、按需加载",
                    "核心理念：扁平化设计、性能优先",
                    "适用范围：单页面多数据交互和展示的后台管理系统",
                ]
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
        width: 680px;
    }
</style>