<template>
  <div id="app">
      <el-container>
          <el-header class="el-header">
              <i class="el-icon-news" style="margin-right: 10px;"></i>
              <span class="el-header-pro">EL产品化1.0.1</span>
              <div class="clear-float" style="float: right;height: 60px;">
                  <span style="display: inline-block;height: 60px;vertical-align: middle;margin-right: 10px;color: #fff;">鳯訡</span>
                  <img src="./images/header_user.png" style="margin-top: 5px;">
              </div>
          </el-header>

          <el-container>
              <el-aside width="300px">
                  <el-row>
                      <el-col :span="24">
                          <h5 style="text-align: center;padding: 10px;border-right: 1px solid #eee;border-bottom: 1px solid #eee;color: #303133">菜单导航</h5>
                          <el-menu
                                  :default-active="menuItemActive"
                                  :unique-opened="true"
                                  :router="true"
                                  class="el-menu-vertical-demo" :style="{height: menuHeight + 'px'}">
                              <el-menu-item index="0" route="/home/0">
                                  <i class="el-icon-setting"></i>
                                  <span slot="title">主页</span>
                              </el-menu-item>
                              <el-submenu index="1">
                                  <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span>基础组件</span>
                                  </template>
                                  <el-menu-item index="1-1" route="/base/layout/1-1">基础布局</el-menu-item>
                                  <el-menu-item index="1-2" route="/base/container/1-2">布局容器</el-menu-item>
                                  <el-menu-item index="1-3" route="/base/color/1-3">色调风格</el-menu-item>
                                  <el-menu-item index="1-4" route="/base/icon/1-4">图标</el-menu-item>
                                  <el-menu-item index="1-5" route="/base/button/1-5">按钮</el-menu-item>
                              </el-submenu>
                              <el-submenu index="2">
                                  <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span>表单控件</span>
                                  </template>
                                  <el-menu-item index="2-1" route="/form/radio/2-1">单选框</el-menu-item>
                                  <el-menu-item index="2-2" route="/form/checkbox/2-2">多选框</el-menu-item>
                                  <el-menu-item index="2-3" route="/form/input/2-3">输入框</el-menu-item>
                                  <el-menu-item index="2-4" route="/form/inputNumber/2-4">计数器</el-menu-item>
                                  <el-menu-item index="2-5" route="/form/select/2-5">下拉选择器</el-menu-item>
                                  <el-menu-item index="2-6" route="/form/cascader/2-6">级联选择器</el-menu-item>
                                  <el-menu-item index="2-7" route="/form/switch/2-7">开关</el-menu-item>
                                  <el-menu-item index="2-8" route="/form/slider/2-8">滑块</el-menu-item>
                                  <el-menu-item index="2-9" route="/form/timePicker/2-9">时间选择器</el-menu-item>
                                  <el-menu-item index="2-10" route="/form/datePicker/2-10">日期选择器</el-menu-item>
                                  <el-menu-item index="2-11" route="/form/dateTimePicker/2-11">日期时间选择器</el-menu-item>
                                  <el-menu-item index="2-12" route="/form/upload/2-12">上传组件</el-menu-item>
                                      <el-menu-item index="2-13" route="/form/rate/2-13">评分组件</el-menu-item>
                                  <el-menu-item index="2-14" route="/form/colorPicker/2-14">颜色选择器</el-menu-item>
                                  <el-menu-item index="2-15" route="/form/transfer/2-15">穿梭框</el-menu-item>
                                  <el-menu-item index="2-16" route="/form/formTest/2-16">Form表单</el-menu-item>
                              </el-submenu>
                              <el-submenu index="3">
                                  <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span>数据类组件</span>
                                  </template>
                                  <el-menu-item index="3-1" route="/data/table/3-1">表格</el-menu-item>
                                  <el-menu-item index="3-2" route="/data/tag/3-2">标签</el-menu-item>
                                  <el-menu-item index="3-3" route="/data/progress/3-3">进度条</el-menu-item>
                                  <el-menu-item index="3-4" route="/data/tree/3-4">树形控件</el-menu-item>
                                  <el-menu-item index="3-5" route="/data/pagination/3-5">分页</el-menu-item>
                                  <el-menu-item index="3-6" route="/data/badge/3-6">标记</el-menu-item>
                              </el-submenu>
                              <el-submenu index="4">
                                  <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span>提示类组件</span>
                                  </template>
                                  <el-menu-item index="4-1" route="/notice/alert/4-1">警告</el-menu-item>
                                  <el-menu-item index="4-2" route="/notice/loading/4-2">加载提示</el-menu-item>
                                  <el-menu-item index="4-3" route="/notice/message/4-3">消息提示</el-menu-item>
                                  <el-menu-item index="4-4" route="/notice/messageBox/4-4">弹框提示</el-menu-item>
                                  <el-menu-item index="4-5" route="/notice/notification/4-5">通知</el-menu-item>
                              </el-submenu>
                              <el-submenu index="5">
                                  <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span>导航类组件</span>
                                  </template>
                                  <el-menu-item index="5-1" route="/navigation/navMenu/5-1">导航菜单</el-menu-item>
                                  <el-menu-item index="5-2" route="/navigation/tabs/5-2">标签页</el-menu-item>
                                  <el-menu-item index="5-3" route="/navigation/breadcrumb/5-3">面包屑</el-menu-item>
                                  <el-menu-item index="5-4" route="/navigation/dropdown/5-4">下拉菜单</el-menu-item>
                                  <el-menu-item index="5-5" route="/navigation/steps/5-5">步骤条</el-menu-item>
                              </el-submenu>
                              <el-submenu index="6">
                                  <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span>其他</span>
                                  </template>
                                  <el-menu-item index="6-1" route="/others/dialog/6-1">对话框</el-menu-item>
                                  <el-menu-item index="6-2" route="/others/tooltip/6-2">文字提示</el-menu-item>
                                  <el-menu-item index="6-3" route="/others/popover/6-3">弹出框</el-menu-item>
                                  <el-menu-item index="6-4" route="/others/card/6-4">卡片</el-menu-item>
                                  <el-menu-item index="6-5" route="/others/carousel/6-5">走马灯</el-menu-item>
                                  <el-menu-item index="6-6" route="/others/collapse/6-6">折叠面板</el-menu-item>
                              </el-submenu>
                              <el-menu-item index="7" route="/axios/7">
                                  <i class="el-icon-setting"></i>
                                  <span slot="title">前后端交互</span>
                              </el-menu-item>
                          </el-menu>
                      </el-col>
                  </el-row>
              </el-aside>
              <el-main :style="{height: contentHeight + 'px'}" id="mainContent">
                  <router-view></router-view>
              </el-main>
          </el-container>
      </el-container>
  </div>
</template>

<script>

    export default {
        name: 'app',
        data(){
            return {
                menuHeight:500,
                contentHeight:500,
                menuItemActive:'0'
            }
        },
        watch:{
            //监听路由切换
            $route:function (newValue,oldValue) {
                document.querySelector("#mainContent").scrollTop = 0; //滚动条滚到最顶部
                this.menuItemActive = newValue.params.index;//设置对应选中菜单
            }
        },
        mounted:function () {
            this.contentHeight = window.innerHeight - 60;
            this.menuHeight = window.innerHeight - 60-42;
        }
    }
</script>

<style scoped>
    .el-header{background: #409EFF}
    .el-header i,.el-header-pro{font-size: 24px;line-height: 60px;color:#e7eff6}
    .el-menu{overflow-x:hidden;}
</style>
