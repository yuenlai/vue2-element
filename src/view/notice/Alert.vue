<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <el-alert
                title="成功提示的文案"
                type="success">
        </el-alert>
        <el-alert
                title="消息提示的文案"
                type="info">
        </el-alert>
        <el-alert
                title="警告提示的文案"
                type="warning">
        </el-alert>
        <el-alert
                title="错误提示的文案"
                type="error">
        </el-alert>
        <div class="el-hr"></div>

        <h4 class="el-h4">自定义关闭按钮</h4>
        <el-alert
                title="不可关闭的 alert"
                type="success"
                :closable="false">
        </el-alert>
        <el-alert
                title="自定义 close-text"
                type="info"
                close-text="知道了">
        </el-alert>
        <el-alert
                title="设置了回调的 alert"
                type="warning"
                @close="hello">
        </el-alert>
        <div class="el-hr"></div>

        <h4 class="el-h4">带ICON</h4>
        <el-alert
                title="成功提示的文案"
                type="success"
                show-icon>
        </el-alert>
        <el-alert
                title="消息提示的文案"
                type="info"
                show-icon>
        </el-alert>
        <el-alert
                title="警告提示的文案"
                type="warning"
                show-icon>
        </el-alert>
        <el-alert
                title="错误提示的文案"
                type="error"
                show-icon>
        </el-alert>
        <div class="el-hr"></div>


        <h4 class="el-h4">文字居中</h4>
        <el-alert
                title="成功提示的文案"
                type="success"
                center
                show-icon>
        </el-alert>
        <el-alert
                title="消息提示的文案"
                type="info"
                center
                show-icon>
        </el-alert>
        <el-alert
                title="警告提示的文案"
                type="warning"
                center
                show-icon>
        </el-alert>
        <el-alert
                title="错误提示的文案"
                type="error"
                center
                show-icon>
        </el-alert>
        <div class="el-hr"></div>

        <h4 class="el-h4">辅助性文字介绍</h4>
        <el-alert
                title="成功提示的文案"
                type="success"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
        </el-alert>
        <el-alert
                title="消息提示的文案"
                type="info"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
        </el-alert>
        <el-alert
                title="警告提示的文案"
                type="warning"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
        </el-alert>
        <el-alert
                title="错误提示的文案"
                type="error"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
        </el-alert>
        <div class="el-hr"></div>




    </div>
</template>
<script>
    export default{
        methods: {
            hello() {
                alert('Hello World!');
            }
        }
    }
</script>
<style scoped>
    .el-alert{margin-bottom: 15px;width: 50%;}
</style>