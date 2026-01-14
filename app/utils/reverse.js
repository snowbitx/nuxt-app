export function reverse(str) {
  let res = ''
  for (let i = str.length - 1; i > 0; i--) {
    res += str[i]
  }
  return res
}

export function reverse2(str) {
  return str.split('').reverse().join('')
}
