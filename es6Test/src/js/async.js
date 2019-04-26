/*
* async 函数是什么？一句话，它就是 Generator 函数的语法糖
* 使得异步操作变得更加方便。*/
import 'babel-polyfill';

/* 1. async函数返回一个 Promise 对象。
async函数内部return语句返回的值，会成为then方法回调函数的参数*/

function example1() {
    async function func() {
        return 'hello world';
    }
    func().then(v => console.log(v))
}
//example1();
/* 2. async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。
抛出的错误对象会被catch方法回调函数接收到。*/
function example2 () {
    async function func() {
        throw new Error('发生错误啦')
    }
    func().then(
        v => console.log(v),
        e => console.log(e)
    )
}
//example2();
/* 3. async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，
除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。*/
function example3_1 () {
    async function func() {
        await new Promise((resolve, reject) => {
            setTimeout(() => resolve('666'), 1000);
        }).then(v => console.log(v));
        await new Promise((resolve, reject) => {
            //throw new Error('error');
            setTimeout(() => resolve('999'), 1000);
        }).then(v => console.log(v));
        return 'success'
    }
    func().then(v => console.log('value:',  v))
          .catch(e => console.log('error2:', e))
}
//example3_1();
/* 4.await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
* 只要一个await语句后面的 Promise 变为reject(promise后面没有catch处理reject的情况下)，那么整个async函数都会中断执行*/
function example4 () {
    async function func() {
        await new Promise((resolve, reject) => {
            //throw new Error('error 了');
            setTimeout(() => reject('reject'), 1000);
        }).then(v => console.log(v)).catch(e => console.log(e)); //此处若没有catch整个async函数会中断执行 进入catch
        await new Promise((resolve, reject) => {
            setTimeout(() => resolve('999'), 1000);
        }).then(v => console.log(v));
        return 'success'
    }
    func().then(v => console.log('value:',  v))
        .catch(e => console.log('error2:', e))
}
example4();
