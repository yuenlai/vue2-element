<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <el-transfer v-model="value1" :data="data"></el-transfer>
        <div class="el-hr"></div>

        <h4 class="el-h4">可搜索</h4>
        <el-transfer
                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入城市拼音"
                v-model="value2"
                :data="data2">
        </el-transfer>
        <div class="el-hr"></div>

        <h4 class="el-h4">自定义</h4>
        <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
        <div style="text-align: center">
            <el-transfer
                    style="text-align: left; display: inline-block"
                    v-model="value3"
                    filterable
                    :left-default-checked="[2, 3]"
                    :right-default-checked="[1]"
                    :render-content="renderFunc"
                    :titles="['Source', 'Target']"
                    :button-texts="['到左边', '到右边']"
                    :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
                    @change="handleChange"
                    :data="data">
                <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
                <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
            </el-transfer>
        </div>
        <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
        <div style="text-align: center">
            <el-transfer
                    style="text-align: left; display: inline-block"
                    v-model="value4"
                    filterable
                    :left-default-checked="[2, 3]"
                    :right-default-checked="[1]"
                    :titles="['Source', 'Target']"
                    :button-texts="['到左边', '到右边']"
                    :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
                    @change="handleChange"
                    :data="data">
                <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
                <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
            </el-transfer>
        </div>
        <div class="el-hr"></div>

        <h4 class="el-h4">数据项属性别名</h4>
        <el-transfer
                v-model="value5"
                :props="{
      key: 'value',
      label: 'desc'
    }"
                :data="data3">
        </el-transfer>
        <div class="el-hr"></div>

    </div>
</template>
<script>
    export default{
        data() {
            const generateData = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        key: i,
                        label: `备选项 ${ i }`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            const generateData2 = _ => {
                const data = [];
                const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
                const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
                cities.forEach((city, index) => {
                    data.push({
                        label: city,
                        key: index,
                        pinyin: pinyin[index]
                    });
                });
                return data;
            };
            const generateData3 = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        value: i,
                        desc: `备选项 ${ i }`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            return {
                data: generateData(),
                value1: [1, 4],
                data2: generateData2(),
                value2: [],
                value3: [1],
                value4: [1],
                data3: generateData3(),
                value5: []
            };
        },
        methods:{
            filterMethod(query, item) {
                return item.pinyin.indexOf(query) > -1;
            },
            handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
            },
            renderFunc(h, option) {
                return <span>{ option.key } - { option.label }</span>
            }
        }
    }
</script>
<style scoped>
    .transfer-footer {
        margin-left: 20px;
        padding: 6px 5px;
    }
</style>