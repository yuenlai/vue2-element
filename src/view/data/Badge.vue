<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
            <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                    评论
                    <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                    回复
                    <el-badge class="mark" :value="3" />
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="el-hr"></div>

        <h4 class="el-h4">最大值</h4>
        <el-badge :value="200" :max="99" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
        <div class="el-hr"></div>

        <h4 class="el-h4">自定义内容</h4>
        <el-badge value="new" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="hot" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>

        <div class="el-hr"></div>

        <h4 class="el-h4">小红点</h4>
        <el-badge is-dot class="item">数据查询</el-badge>
        <el-badge is-dot class="item">
            <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
        </el-badge>
        <div class="el-hr"></div>

    </div>
</template>
<script>
    export default{}
</script>
<style scoped>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>