/**
 *
 * @param {*} fn 返回promise的函数
 * @description  限制重复请求
 */
export function createRequestCash(fn) {
  const map = {}
  return (...args) => {
    return (map[JSON.stringify(args)] ??= fn(...args).finally(() => {
      delete map[JSON.stringify(args)]
    }))
  }
}

const loadData = createRequestCash(() => {
  return new Promise((resolve, _reject) => {
    console.log('发请求了')
    setTimeout(() => {
      resolve({ id: 1 })
    }, 1000)
  })
})

loadData().then((res) => {
  console.log('res :>> ', res)
})
loadData().then((res) => {
  console.log('res :>> ', res)
})
