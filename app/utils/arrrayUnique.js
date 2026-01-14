/**
 * 数组去重
 * @param {Array} arr 需要去重的数组
 * @param {Function} getKey 获取唯一标识的函数
 * @return {Array} 去重后的数组
 */
export function arrayUnique(arr, getKey) {
  const seen = new Set()
  return arr.filter((item) => {
    if (!seen.has(getKey(item))) {
      seen.add(getKey(item))
      return true
    }
    return false
  })
}

// case
const arr = [
  { id: 1, label: '123' },
  { id: 1, label: '2' },
  { id: 2, label: '3' },
]
console.warn(arrayUnique(arr, item => item.id))
