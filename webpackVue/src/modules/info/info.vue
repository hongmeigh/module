<template>
    <div class="home-welcome-box">
        <h1>test info页面</h1>
        <div v-for="item in stuList">
            <span>{{item.name}}:{{item.age}}</span>
        </div>
        <input type="text" v-model="vvv" @change="toChange">
    </div>
</template>
<script>
    const list = [
        {name: '小明', age: 26},
        {name: '小张', age: 22},
    ];
    export default {
        name: 'Home',
        data() {
            return {
                v: true,
                stuList: [...list],
                vvv: ''
            }
        },
        mounted() {
            this.promiseFun().then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            toChange() {
                console.log(this.vvv)
            },
            promiseFun() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('hello')
                    }, 1000)
                })
            }
        },
    }
</script>
<style lang="less">
    .home-welcome-box {
        width: 100%;
        height: 80%;
        font-size: 28px;
    }
</style>
