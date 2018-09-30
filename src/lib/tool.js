import assign from 'object-assign';

/**
 * 
 * @param {*} arr 待去重的数组
 * @param {*} key 用于去重的字段
 */
export const trimObj = (arr = [], key = String) => {
  let newObj = {};
  return arr.reduce((firstItem, nextItem) => {
    newObj[nextItem[key]] ? '' : newObj[nextItem[key]] = true && firstItem.push(nextItem);
    return firstItem;
  }, [])
}


/**
 * 转化为 形如： a=1&b=2&c=3
 * 未否考虑为0 '0' undefined  null的情况
 * @param arr1  keys
 * @param arr2  Object
 */

export const toQueryString = (arr1 = [], arr2 = {}) => {
  return arr1.map(item => {
     return arr2[item] ? item + '=' + arr2[item] : '' ;
  }).filter(v => v).join('&')
}

/**
 * @param
 * @fileOverview
 */