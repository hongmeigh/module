import {
    isArray,
    isObject,
} from './utils';


/**
 * 获取URL中某个参数的值
 * @param  {string} name  参数名
 * @return {string} 参数值
 */
export const getUrlParam = _getUrlParam;

function _getUrlParam(name) {
    const params = {};
    location.search.substring(1).split('&').forEach((it) => {
        params[it.split('=')[0]] = it.split('=')[1];
    });
    return decodeURIComponent(params[name] || '');
}

/**
 * 删掉url中的某个参数
 * @param  {stirng|array} keys 需要删除的key数组['param1', 'param2']
 * @return {string}  remove掉所传参数后的url
 */
export function removeUrlParams(keys) {
    let url = window.location.href;
    keys.forEach((key) => {
        url = _removeUrlParam(url, key);
    });

    return url;
}

export function removeWithUrlParams(url, keys) {
    let newurl = url;
    keys.forEach((key) => {
        newurl = _removeUrlParam(url, key);
    });
    return newurl;
}

function _removeUrlParam(url, key) {
    const regx = new RegExp(`(\\?|&)${key}=[^&#]*(&)?`, 'gi');
    return url.replace(regx, (match, p1, p2) => p1 === '?' || p2 ? p1 : '');
}
export const removeUrlParam = _removeUrlParam;

/**
 * 返回绝对地址
 * @param {string} url 相对地址
 * @return {string} 绝对地址
 */
const anchor = document.createElement('a');
export function toAbsoluteUrl(url) {
    anchor.href = url;
    return anchor.href;
}

/**
 * 序列化url参数
 * @param  {object | array} obj 需要序列化的对象
 * @param  {string} prefix 拼接时是否需要将key全转为小写
 * @return {string} 序列化的参数
 *
 * eg. 1. key1=val1&key2=val2&...
 *     2. key[0]=1&key[1]=2&key[3][e]=a&key[3][d]=t
 */
export const serialize = _serialize;

function _serialize(obj, prefix) {
    const arr = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const val = obj[key];
            const newKey = prefix ? prefix + '[' + key + ']' : key;

            if (isArray(val) || isObject(val)) {
                arr.push(_serialize(val, newKey));
            } else {
                arr.push(`${encodeURIComponent(newKey)}=${encodeURIComponent(val)}`);
            }
        }
    }

    return arr.join('&');
}
