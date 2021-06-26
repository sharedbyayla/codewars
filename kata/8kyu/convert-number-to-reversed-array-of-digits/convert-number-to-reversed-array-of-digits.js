// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

const digitize = (n) => {
  return n
    .toString()
    .split('')
    .map((val) => parseInt(val))
    .reverse()
}

digitize(35231) // -> [1,3,2,5,3]
