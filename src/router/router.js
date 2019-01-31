/**
 * Created by yel on 2019/1/23.
 */
import Vue from "vue"
import Router from "vue-router"
import Home from '../view/Home.vue'
/*import Page from '../view/Page.vue'*/


Vue.use(Router);
const BaseRouterView = () => import ('../view/BaseRouterView.vue');
const Layout = () => import ('../view/base/Layout.vue');
const Container = () => import ('../view/base/Container.vue');
const Color = () => import ('../view/base/Color.vue');
const Icon = () => import ('../view/base/Icon.vue');
const Button = () => import ('../view/base/Button.vue');
//咱换一种引入方式试试(这俩中方式都能实现按需加载)
const Cascader = r => require.ensure([], () => r(require('../view/form/Cascader.vue')), 'cascader');
const Checkbox = r => require.ensure([], () => r(require('../view/form/Checkbox.vue')), 'checkbox');
const ColorPicker = r => require.ensure([], () => r(require('../view/form/ColorPicker.vue')), 'colorPicker');
const DatePicker = r => require.ensure([], () => r(require('../view/form/DatePicker.vue')), 'datePicker');
const DateTimePicker = r => require.ensure([], () => r(require('../view/form/DateTimePicker.vue')), 'dateTimePicker');
const FormTest = r => require.ensure([], () => r(require('../view/form/FormTest.vue')), 'formTest');
const Input = r => require.ensure([], () => r(require('../view/form/Input.vue')), 'input');
const InputNumber = r => require.ensure([], () => r(require('../view/form/InputNumber.vue')), 'inputNumber');
const Radio = r => require.ensure([], () => r(require('../view/form/Radio.vue')), 'radio');
const Rate = r => require.ensure([], () => r(require('../view/form/Rate.vue')), 'rate');
const Select = r => require.ensure([], () => r(require('../view/form/Select.vue')), 'select');
const Slider = r => require.ensure([], () => r(require('../view/form/Slider.vue')), 'slider');
const Switch = r => require.ensure([], () => r(require('../view/form/Switch.vue')), 'switch');
const TimePicker = r => require.ensure([], () => r(require('../view/form/TimePicker.vue')), 'timePicker');
const Transfer = r => require.ensure([], () => r(require('../view/form/Transfer.vue')), 'transfer');
const Upload = r => require.ensure([], () => r(require('../view/form/Upload.vue')), 'upload');

const Badge = r => require.ensure([], () => r(require('../view/data/Badge.vue')), 'badge');
const Pagination = r => require.ensure([], () => r(require('../view/data/Pagination.vue')), 'pagination');
const Progress = r => require.ensure([], () => r(require('../view/data/Progress.vue')), 'progress');
const Table = r => require.ensure([], () => r(require('../view/data/Table.vue')), 'table');
const Tag = r => require.ensure([], () => r(require('../view/data/Tag.vue')), 'tag');
const Tree = r => require.ensure([], () => r(require('../view/data/Tree.vue')), 'tree');

const Alert = r => require.ensure([], () => r(require('../view/notice/Alert.vue')), 'alert');
const Loading = r => require.ensure([], () => r(require('../view/notice/Loading.vue')), 'loading');
const Message = r => require.ensure([], () => r(require('../view/notice/Message.vue')), 'message');
const MessageBox = r => require.ensure([], () => r(require('../view/notice/MessageBox.vue')), 'messageBox');
const Notification = r => require.ensure([], () => r(require('../view/notice/Notification.vue')), 'notification');

const Breadcrumb = r => require.ensure([], () => r(require('../view/navigation/Breadcrumb.vue')), 'breadcrumb');
const Dropdown = r => require.ensure([], () => r(require('../view/navigation/Dropdown.vue')), 'dropdown');
const NavMenu = r => require.ensure([], () => r(require('../view/navigation/NavMenu.vue')), 'navMenu');
const Steps = r => require.ensure([], () => r(require('../view/navigation/Steps.vue')), 'steps');
const Tabs = r => require.ensure([], () => r(require('../view/navigation/Tabs.vue')), 'tabs');

const Card = r => require.ensure([], () => r(require('../view/others/Card.vue')), 'card');
const Carousel = r => require.ensure([], () => r(require('../view/others/Carousel.vue')), 'carousel');
const Collapse = r => require.ensure([], () => r(require('../view/others/Collapse.vue')), 'collapse');
const Dialog = r => require.ensure([], () => r(require('../view/others/Dialog.vue')), 'dialog');
const Popover = r => require.ensure([], () => r(require('../view/others/Popover.vue')), 'popover');
const Tooltip = r => require.ensure([], () => r(require('../view/others/Tooltip.vue')), 'tooltip');

const Axios = r => require.ensure([], () => r(require('../view/axios/Axios.vue')), 'Axios');


export default new Router({
    routes:[
        {
            path:"/",
            redirect:"/home/0"
        },
        {
            path:"/home/:index",
            name:'home',
            component:Home
        },
        {
            path:"/base/",
            component:BaseRouterView,
            children:[
                {
                    path:"layout/:index",
                    name:"layout",
                    component:Layout
                },
                {
                    path:"container/:index",
                    name:"container",
                    component:Container
                },
                {
                    path:"color/:index",
                    name:"color",
                    component:Color
                },
                {
                    path:"icon/:index",
                    name:"icon",
                    component:Icon
                },
                {
                    path:"button/:index",
                    name:"button",
                    component:Button
                }
            ]
        },
        {
            path:"/form/",
            component:BaseRouterView,
            children:[
                {
                    path:'cascader/:index',
                    name:'cascader',
                    component:Cascader
                },
                {
                    path:'checkbox/:index',
                    name:'checkbox',
                    component:Checkbox
                },
                {
                    path:'colorPicker/:index',
                    name:'colorPicker',
                    component:ColorPicker
                },
                {
                    path:'datePicker/:index',
                    name:'datePicker',
                    component:DatePicker
                },
                {
                    path:'dateTimePicker/:index',
                    name:'dateTimePicker',
                    component:DateTimePicker
                },
                {
                    path:'formTest/:index',
                    name:'formTest',
                    component:FormTest
                },
                {
                    path:'input/:index',
                    name:'input',
                    component:Input
                },
                {
                    path:'inputNumber/:index',
                    name:'inputNumber',
                    component:InputNumber
                },
                {
                    path:'radio/:index',
                    name:'radio',
                    component:Radio
                },
                {
                    path:'rate/:index',
                    name:'rate',
                    component:Rate
                },
                {
                    path:'select/:index',
                    name:'select',
                    component:Select
                },
                {
                    path:'slider/:index',
                    name:'slider',
                    component:Slider
                },
                {
                    path:'switch/:index',
                    name:'switch',
                    component:Switch
                },
                {
                    path:'timePicker/:index',
                    name:'timePicker',
                    component:TimePicker
                },
                {
                    path:'transfer/:index',
                    name:'transfer',
                    component:Transfer
                },
                {
                    path:'upload/:index',
                    name:'upload',
                    component:Upload
                }
            ]
        },
        {
            path:"/data/",
            component:BaseRouterView,
            children:[
                {
                    path:"badge/:index",
                    name:'badge',
                    component:Badge
                },
                {
                    path:"pagination/:index",
                    name:'pagination',
                    component:Pagination
                },
                {
                    path:"progress/:index",
                    name:'progress',
                    component:Progress
                },{
                    path:"table/:index",
                    name:'table',
                    component:Table
                },{
                    path:"tag/:index",
                    name:'tag',
                    component:Tag
                },
                {
                    path:"tree/:index",
                    name:'tree',
                    component:Tree
                }
            ]
        },
        {
            path:"/notice/",
            component:BaseRouterView,
            children:[
                {
                    path:'alert/:index',
                    name:'alert',
                    component:Alert
                },
                {
                    path:'loading/:index',
                    name:'loading',
                    component:Loading
                },
                {
                    path:'message/:index',
                    name:'message',
                    component:Message
                },
                {
                    path:'messageBox/:index',
                    name:'messageBox',
                    component:MessageBox
                },
                {
                    path:'notification/:index',
                    name:'notification',
                    component:Notification
                }
            ]
        },
        {
            path:"/navigation/",
            component:BaseRouterView,
            children:[
                {
                    path:'breadcrumb/:index',
                    name:'breadcrumb',
                    component:Breadcrumb
                },
                {
                    path:'dropdown/:index',
                    name:'dropdown',
                    component:Dropdown
                },{
                    path:'navMenu/:index',
                    name:'navMenu',
                    component:NavMenu
                },{
                    path:'steps/:index',
                    name:'steps',
                    component:Steps
                },{
                    path:'tabs/:index',
                    name:'tabs',
                    component:Tabs
                }
            ]
        },
        {
            path:'/others/',
            component:BaseRouterView,
            children:[
                {
                    path:'card/:index',
                    name:'card',
                    component:Card
                },
                {
                    path:'carousel/:index',
                    name:'carousel',
                    component:Carousel
                },
                {
                    path:'collapse/:index',
                    name:'collapse',
                    component:Collapse
                },
                {
                    path:'dialog/:index',
                    name:'dialog',
                    component:Dialog
                },
                {
                    path:'popover/:index',
                    name:'popover',
                    component:Popover
                },
                {
                    path:'tooltip/:index',
                    name:'tooltip',
                    component:Tooltip
                }
            ]
        },
        {
            path:"/axios/:index",
            name:"axios",
            component:Axios
        }
    ]
})