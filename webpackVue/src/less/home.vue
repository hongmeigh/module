<template>
    <div class="home-welcome-box">
        <h1>欢迎进入门店管理系统</h1>
        <el-dialog :append-to-body="true" title="提示" :visable.sync="v">我们</el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                v: true
            }
        },
        mounted() {
        },
        methods: {},
    }
</script>
<style lang="less">
    html,
    body {
        overflow: hidden;
        height: 100%;
    }
    .app-wrap {
        height: 100%;
    }
    .content-wrap {
        height: 100%;
    }
    .home-welcome-box {
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
    }
</style>
