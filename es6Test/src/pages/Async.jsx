/*
* async 函数是什么？一句话，它就是 Generator 函数的语法糖
* 使得异步操作变得更加方便。*/
import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';

class Async extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 111
        }
    }
    componentDidMount() {
        console.log(12345)
    }
    syntax1() {
        function aaa() {
            async function f() {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('1s promise value')
                    }, 1000)
                }).then((res) => {
                    console.log(res)
                }).catch((error) => {
                    console.lg(error)
                });
                return 'hello world';
            }
            f().then(v => console.log(v))
        }
        return (
            <div>
                <button onClick={() => {aaa()}}>运行</button>
            </div>

        )
    }
    render() {
        return (
            <div>
                <span>哈哈哈哈哈哈</span>
                {this.syntax1()}
            </div>

        )
    }
    static run() {
        ReactDom.render(<Async />, document.getElementById('app'))
    }
}
Async.run();
