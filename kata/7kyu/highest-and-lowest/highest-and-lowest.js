// https://www.codewars.com/kata/554b4ac871d6813a03000035

const highAndLow = (numbers) => {
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6') // -> "542 -214"
