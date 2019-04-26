export const isProduct = DIST_ENV === 'product';

export const H5_ORIGIN = isProduct ? "https://h5.xingbianli.com" : "https://h5.intra.im";
export const H5_STATIC_ORIGIN = isProduct ? 'https://h5.xingbianli.com/app/app-mercury-admin' : 'https://h5.intra.im/app/app-mercury-admin';
export const MERCURY_ORIGIN = isProduct ? "https://mercury.xingbianli.com" : "https://mercury.xbl.intra.im";
export const MERCURY_BASE_PATH = isProduct ? "https://mercury.xingbianli.com/page" : "https://mercury.xbl.intra.im/page";
export const ORIGIN_LIST = [];