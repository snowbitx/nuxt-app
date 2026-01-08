/**
 * 深拷贝一个对象，支持处理循环引用和 Map、Set 类型
 * @param {Object} obj 需要深拷贝的对象
 * @param {WeakMap} seen 用于记录已处理的对象，防止循环引用
 * @return {Object} 深拷贝后的新对象
 */
export function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (seen.has(obj)) return seen.get(obj);

  let result;
  if (obj instanceof Map) {
    result = new Map();
  } else if (obj instanceof Set) {
    result = new Set();
  } else {
    result = Array.isArray(obj) ? [] : {};
  }

  seen.set(obj, result);

  if (obj instanceof Map) {
    obj.forEach((value, key) => {
      result.set(key, deepClone(value, seen));
    });
  } else if (obj instanceof Set) {
    obj.forEach((value) => {
      result.add(deepClone(value, seen));
    });
  } else {
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        result[key] = deepClone(obj[key], seen);
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

// case 基础深拷贝

const obj = {
  a: 1,
  b: {
    c: 2
  }
}
const clonedObj = deepClone(obj);
clonedObj.b.c = 3;
console.log('case1', obj.b.c); // 2
console.log('case1', clonedObj.b.c); // 3


// case2 seen
const obj2 = {};
obj2.a = obj2;

const clonedObj2 = deepClone(obj2);
console.log('case2', clonedObj2.a === clonedObj2); // true

// case3 seen
const obj3 = {}
obj3.b = {
  c: 1
}
obj3.d = obj3.b

const clonedObj3 = deepClone(obj3);
clonedObj3.b.c = 2;
console.log('case3', obj3.b.c); // 1
console.log('case3', clonedObj3.b.c); // 2
console.log('case3', clonedObj3.d === clonedObj3.b); // true

// case4 Map
const map = new Map();
map.set('a', 1);
map.set('b', { c: 2 });

const clonedMap = deepClone(map);
clonedMap.get('b').c = 3;
console.log('case4', map.get('b').c); // 2
console.log('case4', clonedMap.get('b').c); // 3
