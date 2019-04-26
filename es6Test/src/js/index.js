import 'babel-polyfill';

let a = 5;
let b = 6;
const promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(100), 2000)
})

// promise.then((res) => {
//     if (res === 200) {
//         return 'ok'
//     } else {
//         throw new Error('失败')
//     }
// }).then((res) => {
//     return res + 'success'
// }).then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })

// promise.then((res) => {
//     if (res === 200) {
//         console.log(1)
//     } else {
//         throw new Error('失败')
//     }
// }).then((res) => {
//     console.log(2)
// }).then((res) => {
//     console.log(3)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log(4)
// })

// Promise.resolve('finally')
//     .finally(() => {
//         console.log('hahaha')
//     })
//     .then((res) => {
//         console.log(res)
//     })
// Promise.reject('error')
//     .finally(() => {
//         console.log('hahaha')
//     })
//     .catch((error) => {
//         console.log(error)
//     })

let p1 = Promise.resolve('成功');
let p2 = Promise.resolve(666);
let p3 = Promise.reject('error').catch((error) => {
    console.log('p3:error');
    return 'p3'
});
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(999), 2000)
})
// Promise.all([9, p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })

Promise.race([p4, p3]).then((res) => {
    console.log('success' + res)
}).catch((error) => {
    console.log(error)
})

class myClass {
    constructor() {
        this.prop = 66;
        console.log(this.prop)
    }
    static getProp() {
        console.log('static getProp');
        return this.prop
    }
    getProp() {
        console.log('getProp');
        return this.prop
    }
}
myClass.prop = 99;
//let newClass = new myClass();
//console.log(newClass)
//newClass.getProp(); // this 为newClass prop指的是实例属性prop 66
//myClass.getProp(); // this 为myClass prop指的是静态属性prop 99

class childClass extends myClass {
    constructor() {
        super();
        super.getProp();
        this.prop = 55;
        this.name = '张三';
    }
    getName() {
        //console.log(super);
        console.log(this.name, super.getProp());
    }
    static getName() {
        //console.log(super);
        console.log(this.name, super.getProp());
    }
}
let newChildClass = new childClass();
newChildClass.getName();
childClass.getName();
console.log(newChildClass.getProp());
console.log(childClass.getProp());

function* hello() {
    yield 1;
    yield 2;
    yield 3;
    console.log(111);
}
var h = hello();
// console.log(h.next());
// console.log(h.next());
// console.log(h.next());
// console.log(h.next());
// console.log(h.next());
function foo(x, y) {
    console.log(x, y)
}
function* demo() {
    foo(yield 'a', yield 'b'); // OK
    let input = yield; // OK
}
var xx = demo();
// console.log(xx.next());
// console.log(xx.next());
// console.log(xx.next());
// console.log(xx.next());
//next 方法参数
function* f() {
    for (var i = 0; true; i++) {
        console.log(i);
        var reset = yield i;
        console.log(i, reset);
        if (reset) {
            i = -1;
        }
    }
}

var g = f();

console.log(g.next()) // { value: 0, done: false }
console.log(g.next()) // { value: 1, done: false }
console.log(g.next(true)) // { value: 0, done: false }

/*一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。如果此后还调用next方法，将返回一个value属性等于undefined、done属性等于true的对象，即 JavaScript 引擎认为这个 Generator 已经运行结束了。*/

function* gg() {
    yield 1;
    console.log('throwing an exception');
    throw new Error('generator broke!');
    yield 2;
    yield 3;
}
function log(generator) {
    var v;
    console.log('starting generator');
    try {
        v = generator.next();
        console.log('第一次运行next方法', v);
    } catch ( err ) {
        console.log('捕捉错误', v);
    }
    try {
        v = generator.next();
        console.log('第二次运行next方法', v);
    } catch ( err ) {
        console.log('捕捉错误', v);
    }
    try {
        v = generator.next();
        console.log('第三次运行next方法', v);
    } catch ( err ) {
        console.log('捕捉错误', v);
    }
    console.log('caller done');
}

log(gg());
