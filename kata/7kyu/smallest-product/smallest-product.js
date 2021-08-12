// https://www.codewars.com/kata/5b6b128783d648c4c4000129

function smallestProduct(arr) {
  return Math.min(...arr.map((array) => array.reduce((t, c) => t * c, 1)))
}

smallestProduct([
  [3, 2],
  [1, 2, 1],
  [7, 8],
]) // -> 2
smallestProduct([[10], [3, 0], [-1, -6, 2]]) // -> 0
