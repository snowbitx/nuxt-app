/**
 * 
 * @param {*} target 数组 带有parentId和id 
 * @param {*} parentId 要转为树的根节点
 * @returns 
 * 1.需要初始化 res和queue
 * 2.根据第二个参数找到根节点，同时放入res和queue
 * 3.此时队列queue中有一个根节点。while queue.length 
 * 4.取出queue的第一个 找到他的所有子节点放入其children中，同时将子节点也放入队列
 */

export function arrayToTreeBfc(target, rootId = null) {
  const res = []
  const queue = []
  const root = target.find(item => item.parentId === rootId)
  if (!root) throw new Error('未找到根节点')
  res.push(root)
  queue.push(root)
  while (queue.length) {
    const current = queue.shift()
    for (const item of target) {
      if (item.parentId === current.id) {
        (current.children ??= []).push(item)
        queue.push(item)
      }
    }
  }
  return res
}

const data = [
  { id: 1, parentId: null, name: "根节点" },
  { id: 2, parentId: 1, name: "子节点1" },
  { id: 3, parentId: 1, name: "子节点2" },
  { id: 4, parentId: 2, name: "子节点1-1" },
  { id: 5, parentId: 2, name: "子节点1-2" },
  { id: 6, parentId: 3, name: "子节点2-1" },
];

const node = arrayToTreeBfc(data)
console.log(JSON.stringify(node, null, 2))

