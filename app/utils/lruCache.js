/**
 * @description 缓存最新的key，当访问和设置时都看作是最新的。设置时考虑最大缓存数量，如果不存在则需要把最久的去除
 */
export class LRUCash {
  cache = new Map()
  max
  constructor(max = 3) {
    this.max = max
  }
  get(key) {
    // 访问了key 将key移动到最后面，代表最新的
    if (!this.cache.has(key)) return
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
  }
  set(key, value) {
    // 设置缓存时如果有则直接删除再set，移动到最后面
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else {
      // 如果没有，不能直接set 需要判断最大数量，如果达到了需要删掉第一个
      if (this.cache.size >= this.max) {
        const firstKey = this.cache.keys().next().value
        this.cache.delete(firstKey)
      }
    }
    this.cache.set(key, value)
  }
}

const cash = new LRUCash(2)
cash.set('A', 1)
cash.set('B', 2)
cash.set('A', 4)
cash.set('C', 3)
console.log(cash)
