// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

const findSmallestInt = (args) => {
  return Math.min(...args)
}

findSmallestInt([78, 56, 232, 12, 8]) // -> 8
findSmallestInt([78, 56, 232, 12, 18]) // -> 12
findSmallestInt([78, 56, 232, 412, 228]) // -> 56
findSmallestInt([78, 56, 232, 12, 0]) // -> 0
findSmallestInt([1, 56, 232, 12, 8]) // -> 1
