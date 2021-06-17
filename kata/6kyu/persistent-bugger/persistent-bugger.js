// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

const persistence = (num) => {
  // transform a number to a given number to an array of it's digits
  const toNumArray = (num) => {
    return num
      .toString()
      .split('')
      .map((x) => (x = parseInt(x)))
  }

  // variables
  const numArr = toNumArray(num)
  let count = 0

  // rescursive function to reduce to single digit and increment count
  const evaluate = (arr) => {
    if (arr.length !== 1) {
      count += 1

      arr = toNumArray(arr.reduce((product, val) => (product = product * val)))
      evaluate(arr)
    }
  }

  // invoke recursive reducer
  evaluate(numArr)

  return count
}

persistence(39) // -> 3 // 3*9 = 27, 2*7 = 14, 1*4 = 4
persistence(999) // -> 4 // 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, 1*2 = 2
persistence(4) // -> 0 // 4 is already a one-digit number
