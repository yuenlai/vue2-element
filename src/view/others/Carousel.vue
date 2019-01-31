<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="block">
            <span class="demonstration">Click 指示器触发</span>
            <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="el-hr"></div>

        <h4 class="el-h4">指示器（外放）</h4>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 style="line-height: 300px;">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="el-hr"></div>


        <h4 class="el-h4">切换箭头（一直显示）</h4>
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 style="line-height: 300px;">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="el-hr"></div>

        <h4 class="el-h4">卡片化</h4>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 style="line-height: 200px;">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="el-hr"></div>

        <h4 class="el-h4">基础用法</h4>
        <div class="el-hr"></div>

    </div>
</template>
<script>
    export default{}
</script>
<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel{width: 30%}
    .el-carousel h3{text-align: center;color: #fff;}
</style>