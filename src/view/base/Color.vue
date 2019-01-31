<template>
    <div>
        <h4>框架主色调</h4>
        <el-row :gutter="20">
            <el-col :span="3"><div class="grid-content" style="background-color: #409EFF">Blue：#409EFF</div></el-col>
        </el-row>
        <div class="el-hr"></div>

        <h4>框架辅助色(用于场景)</h4>
        <el-row :gutter="20">
            <el-col :span="3"><div class="grid-content" style="background-color: #67C23A">Success：#67C23A</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #E6A23C">Warning：#E6A23C</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #F56C6C">Danger：#F56C6C</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #909399">Info：#909399</div></el-col>
        </el-row>
        <div class="el-hr"></div>

        <h4>框架中性色(用于文字)</h4>
        <el-row :gutter="20">
            <el-col :span="3"><div class="grid-content" style="background-color: #303133">主要文字：#303133</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #606266">常规文字：#606266</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #909399">次要文字：#909399</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #C0C4CC">占位文字：#C0C4CC</div></el-col>
        </el-row>
        <div class="el-hr"></div>

        <h4>框架中性色(用于边框)</h4>
        <el-row :gutter="20">
            <el-col :span="3"><div class="grid-content" style="background-color: #DCDFE6;color: #000">一级边框：#DCDFE6</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #E4E7ED;color: #000">二级边框：#E4E7ED</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #EBEEF5;color: #000">三级边框：#EBEEF5</div></el-col>
            <el-col :span="3"><div class="grid-content" style="background-color: #F2F6FC;color: #000">四级边框：#F2F6FC</div></el-col>
        </el-row>
    </div>
</template>
<script>
    export default{}
</script>
<style scoped>
    h4{margin-bottom: 15px;color: #303133;}
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        height: 60px;
        line-height: 60px;
        color: #fff;
        text-align: center;
    }
</style>