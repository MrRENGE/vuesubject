// 入口文件
import Vue from "vue"
import app from "./App.vue"
//按需导入mint-ui 组件中的header
import {Header} from "mint-ui"
//导入mui的样式
import "./lib/mui/css/mui.min.css"
Vue.component(Header.name,Header)
var vm = new Vue({
    el:"#app",
    render: c=>c(app)
})