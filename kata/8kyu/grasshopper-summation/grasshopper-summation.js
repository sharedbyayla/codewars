// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

const summation = (num) => {
  return [...new Array(num)].map((_, i) => i + 1).reduce((x, y) => x + y)
}

summation(2) // -> 3
summation(8) // -> 36
