<template>
    <div id="app">
        <Content
            class="content"
            :style="contentHeight"
        />
        <span>{{name}} </span>
        <span>{{resultData}}</span>
        <el-button type="primary">主要按钮</el-button>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item
                index="3"
                disabled
            >消息中心</el-menu-item>
            <el-menu-item index="4"><a
                    href="https://www.ele.me"
                    target="_blank"
                >订单管理</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Provide,
    Prop
} from 'vue-property-decorator';
import Content from "./components/Content.vue";
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
@Component
export default class App extends Vue {
    private contentHeight: any = { height: 0, width: '100%' };
    private headerHeight: object = { height: 0 };
    private activeIndex: string = '';

    @State private name: any;

    private resultData: string = '';

    protected created() {
        const that: any = this;
        this.contentHeight.height = window.innerHeight - 80 + "px";

        axios.get('/test').then((res) => {
            that.resultData = res.data;
        });
    }

    private handleSelect(key: number, keyPath: string) {
        // console.log(key, keyPath);
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
}

.header {
    width: 100%;
    height: 80px;
}

.content {
    width: 100%;
}
</style>