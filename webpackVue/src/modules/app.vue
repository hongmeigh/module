<template>
    <div id="app" class="app-wrap">
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>
<script>
    import Vue from 'vue';

    export default {
        name: 'app',
        props: [],
        data() {
            return {
            }
        },
        components: {
        },
        mounted() {

        },
        methods: {
        }
    }
</script>
<style lang="less">
    @import "../less/common.less";
    @import "../less/preset.less";
    .app-wrap {
        padding: 20px;
    }
</style>
