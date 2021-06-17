// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

const findUniq = (arr) => {
  const firstVal = arr.shift()
  if (arr.includes(firstVal)) return arr.filter((val) => val !== firstVal)[0]
  else return firstVal
}

findUniq([1, 1, 1, 2, 1, 1]) // -> === 2
findUniq([0, 0, 0.55, 0, 0]) // -> === 0.55
