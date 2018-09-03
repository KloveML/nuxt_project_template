/**
 * getCookie
 */
export function getCookie(cookie, key) {
  if (!cookie) {
    return undefined;
  }
  const strs = cookie.split(';');
  const ret = {};
  strs.forEach(str => {
    const item = str.split('=');
    ret[item[0]] = item[1];
  });
  return ret[key];
}

/**
 * setCookie
 */
const DEFAULT_DAYS = 7;
export function setCookie(key, value) {
  const curDate = new Date();
  curDate.setDate(curDate.getDate() + DEFAULT_DAYS);
  document.cookie = key + '=' + value + ';expires=' + curDate;
}

/**
 * setCookie
 */
export function deleteCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  document.cookie = name + '=v;expires=' + exp.toUTCString();
}
