<template>
    <div>
        <el-button @click="getData" style="margin-bottom: 15px;">获取数据</el-button>
        <el-table
                :data="tableData"
                height="250"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import TableData from '../../testData/tableData.json'
    export default{
        data(){
            return {
                tableData:[]
            }
        },
        methods:{
            getData(){
                var self = this;
                this.$http.get('/testData/tableData.json')
                    .then(function(res){
                        if(res && res.success){
                            self.tableData = res.content;
                        }else{
                            self.$message.error(res.message);
                        }
                    }).catch(function (error) {
                    self.tableData = TableData.content;
                    self.$notify.warning({
                        title: '提示',
                        message: '获取的本地数据',
                        duration: 3000
                    });
                })
            }
        }
    }
</script>
<style scoped>

</style>