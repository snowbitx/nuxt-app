// 实现一个 发布订阅模式。支持emit on once off
class EventListener {
  listener = new Map()
  emit(eventName, ...args) {
    const events = this.listener.get(eventName)
    events.forEach(cb => {
      cb(...args)
    })
  }
  on(eventName, cb) {
    if (!this.listener.has(eventName)) {
      this.listener.set(eventName, [])
    }
    const events = this.listener.get(eventName)
    this.listener.set(eventName, [...events, cb])
  }
  off(eventName) {
    this.listener.delete(eventName)
  }
  once(eventName, cb) {
    this.on
  }
}

const bus = new EventListener()
bus.on('handler', (arg) => console.log('执行handler', arg))
bus.on('handler', (arg) => console.log('执行handler2', arg))
bus.emit('handler')


class eventBus {
  events = {}
  on(event, cb) {
    ; (this.events[event] ??= new Set()).add(cb)
  }
  emit(event, ...args) {
    this.events[event]?.forEach(cb => cb(...args))
  }
  off(event, cb) {
    this.events[event]?.delete(cb)
  }
  once(event, cb) {
    const handler = () => {
      cb(event, cb)
      this.off(event, cb)
    }
    this.on(event, handler)
  }
}
