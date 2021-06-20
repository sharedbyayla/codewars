// https://www.codewars.com/kata/55f2b110f61eb01779000053

const getSum = (a, b) => {
  const max = Math.max(a, b)
  const min = Math.min(a, b)

  return [...Array(max - min + 1).keys()]
    .map((_, i) => i + min)
    .reduce((total, current) => total + current, 0)
}

getSum(1, 0) // -> 1
getSum(1, 2) // -> 3
getSum(0, 1) // -> 1
getSum(1, 1) // -> 1
getSum(-1, 0) // -> -1
getSum(-1, 2) // -> 2
