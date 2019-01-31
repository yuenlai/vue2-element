<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <div class="block">
            <span class="demonstration">页数较少时的效果</span>
            <el-pagination
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
        </div>
        <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="el-hr"></div>

        <h4 class="el-h4">设置最大页码按钮个数</h4>
        <el-pagination
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
        <div class="el-hr"></div>

        <h4 class="el-h4">带有背景色的分页</h4>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
        <div class="el-hr"></div>

        <h4 class="el-h4">小型分页</h4>
        <el-pagination
                small
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
        <div class="el-hr"></div>

        <h4 class="el-h4">附加功能</h4>
        <div class="block">
            <span class="demonstration">显示总数</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="block">
            <span class="demonstration">调整每页显示条数</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage2"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="sizes, prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="block">
            <span class="demonstration">直接前往</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="block">
            <span class="demonstration">完整功能</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
        <div class="el-hr"></div>
    </div>
</template>
<script>
    export default{
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            };
        }
    }
</script>
<style scoped>
    .block{display: block;margin: 15px 15px 0 0;}
</style>