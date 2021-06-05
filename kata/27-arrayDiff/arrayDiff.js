// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

const arrayDiff = (a, b) => {
  b.forEach(bVal => a = a.filter(aVal => bVal !== aVal))
  return a
}

  arrayDiff([], [4,5]) // -> []
  arrayDiff([3,4], [3]) // -> [4] 
  arrayDiff([1,8,2], []) // -> [1,8,2]
  arrayDiff([1,2,3], [1,2]) // -> [3] 