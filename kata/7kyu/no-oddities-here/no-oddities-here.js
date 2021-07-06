// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

const noOdds = (values) => {
  return values.filter((n) => n % 2 === 0)
}

noOdds([0, 1]) // -> [0]
noOdds([0, 1, 2, 3]) // -> [0,2]
