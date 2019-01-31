<template>
    <div>
        <h4 class="el-h4">选择日</h4>
        <div class="block">
            <span class="demonstration">默认：  </span>
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
            </el-date-picker>
        </div>
        <div class="block" style="margin-left: 15px;">
            <span class="demonstration">带快捷选项：  </span>
            <el-date-picker
                    v-model="value2"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1">
            </el-date-picker>
        </div>
        <div class="el-hr"></div>

        <h4 class="el-h4">其他单位（周、月、年、多个日期）</h4>
        <div class="container">
            <div class="block">
                <span class="demonstration">周：  </span>
                <el-date-picker
                        v-model="value3"
                        type="week"
                        format="yyyy 第 WW 周"
                        placeholder="选择周">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">月：  </span>
                <el-date-picker
                        v-model="value4"
                        type="month"
                        placeholder="选择月">
                </el-date-picker>
            </div>
        </div>
        <div class="container">
            <div class="block">
                <span class="demonstration">年：  </span>
                <el-date-picker
                        v-model="value5"
                        type="year"
                        placeholder="选择年">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">多个日期：  </span>
                <el-date-picker
                        type="dates"
                        v-model="value14"
                        placeholder="选择一个或多个日期">
                </el-date-picker>
            </div>
        </div>
        <div class="el-hr"></div>

        <h4 class="el-h4">选择日期范围</h4>
        <div class="block">
            <span class="demonstration">默认：  </span>
            <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">带快捷选项：  </span>
            <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2">
            </el-date-picker>
        </div>
        <div class="el-hr"></div>

        <h4 class="el-h4">日期格式</h4>
        <div class="block">
            <span class="demonstration">默认为 Date 对象</span>
            <div class="demonstration">值：{{ value10 }}</div>
            <el-date-picker
                    v-model="value10"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">使用 value-format</span>
            <div class="demonstration">值：{{ value11 }}</div>
            <el-date-picker
                    v-model="value11"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">时间戳</span>
            <div class="demonstration">值：{{ value12 }}</div>
            <el-date-picker
                    v-model="value12"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="timestamp">
            </el-date-picker>
        </div>
        <div class="el-hr"></div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value14: '',
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value6: '',
                value7: '',
                value10: '',
                value11: '',
                value12: ''
            }
        }
    }
</script>
<style scoped>
    .block{display: inline-block;margin-right: 15px;margin-bottom: 15px;}
</style>