// https://www.codewars.com/kata/52f3149496de55aded000410

const sumDigits = (number) => {
  return String(number)
    .split('')
    .filter((val) => /[0-9]/g.test(val))
    .reduce((total, current) => total + parseInt(current), 0)
}
sumDigits(10) // -> 1
sumDigits(99) // -> 18
sumDigits(-32) // -> 5
