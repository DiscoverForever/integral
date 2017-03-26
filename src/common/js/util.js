/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};
/**
 * 设置缓存
 * @param key
 * @param value
 */
export function setStorage(key, value) {
  if (!key || !value) {
    console.log('setStorage参数为空');
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
}
/**
 * 获取缓存
 * @param key
 */
export function getStorage(key) {
  if (!key) {
    console.log('setStorage参数为空');
  }
  return JSON.parse(window.localStorage.getItem(key));
}
