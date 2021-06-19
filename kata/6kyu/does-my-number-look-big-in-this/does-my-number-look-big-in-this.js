// https://www.codewars.com/kata/5287e858c6b5a9678200083c

const narcissistic = (value) => {
  numArr = value
    .toString()
    .split('')
    .map((x) => (x = parseInt(x)))
  return (
    numArr.reduce((total, current) => total + current ** numArr.length, 0) ===
    value
  )
}

narcissistic(7) // -> true
narcissistic(371) // -> true
narcissistic(153) // -> true
narcissistic(1652) // -> false
