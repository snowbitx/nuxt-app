/**
 *
 * @param {function} cb
 * @returns function
 * @description 记忆函数 接收一个执行函数返回一个函数，相同参数调用只执行一次
 */
export function memorize(cb) {
  const map = new Map()
  return function (...args) {
    return map.get(JSON.stringify(args)) || map.set(JSON.stringify(args), cb(...args))
  }
}
// case
const fn = memorize((arr) => {
  console.count('count')
  return arr.map(item => item += 1)
})
const count = fn([1, 2, 3])
const count2 = fn([1, 2, 3])
console.log(count, count2)
