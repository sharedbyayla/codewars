// https://www.codewars.com/kata/55685cd7ad70877c23000102

const makeNegative = (num) => {
  return num > 0 ? -num : num
}

makeNegative(1) // -> -1
makeNegative(-5) // -> -5
makeNegative(0) // -> 0
makeNegative(0.12) // -> -0.12
