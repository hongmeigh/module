import 'babel-polyfill';

let symbol1 = Symbol();
let symbol2 = Symbol('foo');
let symbol3 = Symbol('boo');
let symbol4 = Symbol('foo');
let symbol5 = Symbol.for('foo');
console.log('value:', symbol1, symbol2, symbol3);
console.log('typeof:', typeof symbol1, typeof symbol2, typeof symbol3);
console.log('toString:', symbol1.toString(), symbol2.toString(), symbol3.toString());
/*在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。*/
let sss = Symbol();
const obj = {
    aaa: '666',
    [sss]: '哈哈哈'
};
console.log(obj[sss]);
/*Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。*/
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));
/*另一个新的 API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。*/
console.log(Reflect.ownKeys(obj));
/*Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，
而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，
但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。*/
console.log(Symbol('foo') === Symbol('foo'));
//Symbol.for()搜索的是Symbol.for这种登记过的值
console.log(Symbol.for('foo') === Symbol.for('foo'));
console.log(Symbol.for('foo') === symbol5);
console.log(Symbol.for('foo') === symbol5);
/*Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。*/
console.log(Symbol.keyFor(symbol5));