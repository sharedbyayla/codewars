// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

const isSquare = (n) => {
  return Math.sqrt(n) === parseInt(Math.sqrt(n))
}

isSquare(-1) // -> false
isSquare(0) // -> true
isSquare(3) // -> false
isSquare(4) // -> true
isSquare(25) // -> true
isSquare(26) // -> false
