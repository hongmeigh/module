var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});
// obj.count = 1;
// ++obj.count;
let proxyObj = new Proxy({x: 1, y: 1}, {
    set: function(target, property) {
        if (property == 'x') {
            console.log(123, target.x)
            return target.x = target.x + 1
        }
    }
});
proxyObj.x = 9;
proxyObj.x;
let aaa = Object.create(proxyObj);
aaa.x = 10;

const dom = new Proxy({}, {
    get(target, property) {
        return function(attrs = {}, ...children) {
            const el = document.createElement(property);
            for (let prop of Object.keys(attrs)) {
                el.setAttribute(prop, attrs[prop]);
            }
            for (let child of children) {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                el.appendChild(child);
            }
            return el;
        }
    }
});

const el = dom.div({},
    'Hello, my name is ',
    dom.a({href: '//example.com'}, 'Mark'),
    '. I like:',
    dom.ul({},
        dom.li({}, 'The web'),
        dom.li({}, 'Food'),
        dom.li({}, '…actually that\'s it')
    )
);

document.body.appendChild(el);

window.user = new Proxy({}, {
    set: function(target, key, value) {
        if (key === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        target[key] = value;
    }
});

window.dd = new Proxy(function() {console.log(this.a)}, {
    // get: function(target, key, proxyObj) {
    //
    // },
    // set: function(target, key, value, proxyObj) {
    //
    // },
    //target为函数
    construct: function(target, args, newTarget) {
        console.log(args);
        return {max: Math.max(...args)};
    },
    //target为函数
    apply: function(target, newThis, args) {
        console.log(args, newThis);
        return newThis.a
    },
    //target为函数
    has: function(target, key) {

    },
    //deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
    deleteProperty: function(target, key) {

    },
    //defineProperty方法拦截了Object.defineProperty操作。
    //上面代码中，defineProperty方法返回false，导致添加新属性总是无效。
    defineProperty: function(target, key, description) {

    },
    //getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。
    getOwnPropertyDescriptor: function(target, key) {

    },
    //getPrototypeOf方法主要用来拦截获取对象原型。
    getPrototypeOf: function(target) {

    },
    //isExtensible方法拦截Object.isExtensible操作。
    isExtensible: function(target) {

    },
    //ownKeys方法用来拦截对象自身属性的读取操作。
    ownKeys: function(target) {

    },
    //preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。
    preventExtensions: function(target) {

    },
    //setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法。
    setPrototypeOf: function(target) {

    }
})
