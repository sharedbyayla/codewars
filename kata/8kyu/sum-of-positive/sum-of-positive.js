// https://www.codewars.com/kata/5715eaedb436cf5606000381

const positiveSum = (arr) => {
  return arr.reduce((x, val) => x + (val > 0 ? val : 0), 0)
}

positiveSum([1, 2, 3, 4, 5]) // -> 15
positiveSum([1, -2, 3, 4, 5]) // -> 13
positiveSum([]) // -> 0
positiveSum([-1, -2, -3, -4, -5]) // -> 0
positiveSum([-1, 2, 3, 4, -5]) // -> 9
