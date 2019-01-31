<template>
    <div>
        <h4 class="el-h4">基础用法</h4>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <div class="el-hr"></div>

        <h4 class="el-h4">可选择 + 动态获取子节点</h4>
        <el-tree
                :props="props"
                :load="loadNode"
                lazy
                show-checkbox
                @check-change="handleCheckChange">
        </el-tree>
        <div class="el-hr"></div>

        <h4 class="el-h4">默认展开和默认选中</h4>
        <el-tree
                :data="data2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
        </el-tree>
        <div class="el-hr"></div>

        <h4 class="el-h4">禁用状态</h4>
        <el-tree
                :data="data3"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]">
        </el-tree>

        <div class="el-hr"></div>

        <h4 class="el-h4">节点过滤</h4>
        <el-input
                placeholder="输入关键字进行过滤"
                v-model="filterText">
        </el-input>

        <el-tree
                class="filter-tree"
                :data="data2"
                :props="defaultProps"
                default-expand-all
                :filter-node-method="filterNode"
                ref="tree2">
        </el-tree>
        <div class="el-hr"></div>

        <h4 class="el-h4">手风琴模式</h4>
        <el-tree
                :data="data"
                :props="defaultProps"
                accordion
                @node-click="handleNodeClick">
        </el-tree>

        <div class="el-hr"></div>

        <h4 class="el-h4">可拖拽</h4>
        <el-tree
                :data="data6"
                node-key="id"
                default-expand-all
                @node-drag-start="handleDragStart"
                @node-drag-enter="handleDragEnter"
                @node-drag-leave="handleDragLeave"
                @node-drag-over="handleDragOver"
                @node-drag-end="handleDragEnd"
                @node-drop="handleDrop"
                draggable
                :allow-drop="allowDrop"
                :allow-drag="allowDrag">
        </el-tree>
        <div class="el-hr"></div>
    </div>
</template>
<script>
    export default{
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1,
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                data3: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级 2-1',
                        children: [{
                            id: 4,
                            label: '三级 3-1-1'
                        }, {
                            id: 5,
                            label: '三级 3-1-2',
                            disabled: true
                        }]
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        disabled: true,
                        children: [{
                            id: 6,
                            label: '三级 3-2-1'
                        }, {
                            id: 7,
                            label: '三级 3-2-2',
                            disabled: true
                        }]
                    }]
                }],
                filterText: '',
                data6: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2',
                        children: [{
                            id: 11,
                            label: '三级 3-2-1'
                        }, {
                            id: 12,
                            label: '三级 3-2-2'
                        }, {
                            id: 13,
                            label: '三级 3-2-3'
                        }]
                    }]
                }]
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            handleDragStart(node, ev) {
                console.log('drag start', node);
            },
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            allowDrop(draggingNode, dropNode, type) {
                if (dropNode.data.label === '二级 3-1') {
                    return type !== 'inner';
                } else {
                    return true;
                }
            },
            allowDrag(draggingNode) {
                return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            }
        }
    }
</script>
<style scoped>

</style>