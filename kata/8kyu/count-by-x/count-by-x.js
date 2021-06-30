// https://www.codewars.com/kata/5513795bd3fafb56c200049e

const countBy = (x, n) => {
  return [...new Array(n)].map((_, i) => (i === 0 ? x : (i + 1) * x))
}

countBy(1, 10) // -> [1,2,3,4,5,6,7,8,9,10]
countBy(2, 5) // -> [2,4,6,8,10]
