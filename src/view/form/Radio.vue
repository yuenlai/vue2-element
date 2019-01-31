<template>
    <div>
        <h4>基础用法</h4>
        <el-radio v-model="radio" label="1">备选项1</el-radio>
        <el-radio v-model="radio" label="2">备选项2</el-radio>
        <div class="el-hr"></div>

        <h4>禁用状态</h4>
        <el-radio disabled v-model="radio" label="1">备选项</el-radio>
        <el-radio disabled v-model="radio" label="2">备选项</el-radio>
        <div class="el-hr"></div>

        <h4>单选框组</h4>
        <el-radio-group v-model="radio1">
            <el-radio :label="3">选项1</el-radio>
            <el-radio :label="6">选项2</el-radio>
            <el-radio :label="9">选项3</el-radio>
        </el-radio-group>
        <div class="el-hr"></div>

        <h4>按钮样式</h4>
        <div>
            <el-radio-group v-model="radio3">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio4" size="medium">
                <el-radio-button label="上海" ></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio5" size="small">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京" disabled ></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio6" disabled size="mini">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="el-hr"></div>

        <h4>带边框</h4>
        <div>
            <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
            <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
            <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio9" size="small">
                <el-radio label="1" border>备选项1</el-radio>
                <el-radio label="2" border disabled>备选项2</el-radio>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio10" size="mini" disabled>
                <el-radio label="1" border>备选项1</el-radio>
                <el-radio label="2" border>备选项2</el-radio>
            </el-radio-group>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                radio:"2",
                radio1:6,
                radio3: '上海',
                radio4: '北京',
                radio5: '上海',
                radio6: '上海',
                radio7: '1',
                radio8: '1',
                radio9: '1',
                radio10: '1'
            }
        }
    }
</script>
<style scoped>
    h4{color: #303133;margin:0 0 20px 0}

</style>