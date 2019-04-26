let obj = {};
Reflect.defineProperty(obj, 'x', {
    value: 123
});
console.log(obj);
window.loggedObj = new Proxy(obj, {
    get(target, name) {
        console.log('get', target, name);
        return Reflect.get(target, name);
    },
    deleteProperty(target, name) {
        console.log('delete' + name);
        return Reflect.deleteProperty(target, name);
    },
    has(target, name) {
        console.log('has' + name);
        return Reflect.has(target, name);
    }
});
//fun.apply(obj, [1,2]) =>  obj.fun(1,2)
//fun.call(obj, 1, 2) =>  obj.fun(1,2)
//Function.prototype.apply.call(Math.floor, undefined, [1.75]) => Math.floor.apply(undefined, [1.75]) => Math.floor(1.75)

//静态方法
// Reflect.apply(target, thisArg, args);
// Reflect.construct(target, args);
// Reflect.get(target, name, receiver);
// Reflect.set(target, name, value, receiver);
// Reflect.defineProperty(target, name, desc);
// Reflect.deleteProperty(target, name);
// Reflect.has(target, name);
// Reflect.ownKeys(target);
// Reflect.isExtensible(target);
// Reflect.preventExtensions(target);
// Reflect.getOwnPropertyDescriptor(target, name);
// Reflect.getPrototypeOf(target);
// Reflect.setPrototypeOf(target, prototype);