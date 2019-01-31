<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
        <div class="el-hr"></div>

        <h4 class="el-h4">可移除</h4>
        <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                @close="handleClose(tag)"
                :type="tag.type">
            {{tag.name}}
        </el-tag>
        <div class="el-hr"></div>


    </div>
</template>
<script>
    export default{
        data() {
            return {
                tags: [
                    { name: '标签一', type: '' },
                    { name: '标签二', type: 'success' },
                    { name: '标签三', type: 'info' },
                    { name: '标签四', type: 'warning' },
                    { name: '标签五', type: 'danger' }
                ]
            };
        },
        methods:{
            handleClose(tag) {
                this.tags.splice(this.tags.indexOf(tag), 1);
            },
        }
    }
</script>
<style scoped>
    .el-tag{margin-right: 15px;}
</style>