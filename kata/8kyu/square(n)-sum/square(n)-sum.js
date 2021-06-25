// https://www.codewars.com/kata/515e271a311df0350d00000f

const squareSum = (numbers) => {
  return numbers
    .map((num) => num * num)
    .reduce((total, current) => total + current, 0)
}

squareSum([1, 2]) // -> 5
squareSum([0, 3, 4, 5]) // -> 50
