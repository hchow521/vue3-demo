/**
 * @description: Math.round保留小数四舍五入
 * @param num 保留的数字
 * @param ceil 保留*位小数
 * @return {num}
 */
export { default as hellow } from './test'
export function round(num, ceil = 0) {
  if (ceil) {
    ceil = Math.pow(10, ceil)
    return Math.round(num * ceil) / ceil
  } else {
    return Math.round(num)
  }
}