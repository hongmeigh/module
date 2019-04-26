
export function isArray(obj) {
    return Array.isArray(obj);
}

export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

export function parseQuery(search) {
    return search.slice(1).split('&')
        .map(seg => seg.split('='))
        .map(pair => pair.map(decodeURIComponent))
        .reduce((map, pair) => (map[pair[0]] = pair[1], map), {});
}

export function formatTime(time) {
    let date = new Date();
    date.setTime(time);
    const year = date.getFullYear();
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minute}:${seconds}`
}