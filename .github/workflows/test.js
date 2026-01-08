export function getCircleEntry(head) {
  //  1.找到相遇点
  //  2.找起点
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      // 相遇后从头开始找 环点起点
      let p = head
      while (p && p.next) {
        p = p.next
        slow = slow.next
        if (p === slow) {
          return p
        }
      }
    }
  }
  return
}
