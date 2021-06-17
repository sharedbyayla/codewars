// https://www.codewars.com/kata/546e2562b03326a88e000020

const squareDigits = (num) => {
  return parseInt(
    num
      .toString()
      .split('')
      .map((num) => num * num)
      .join('')
  )
}

squareDigits(3212) // -> 9414
squareDigits(2112) // -> 4114
squareDigits(0) // -> 0
