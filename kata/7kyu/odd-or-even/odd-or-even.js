// https://www.codewars.com/kata/5949481f86420f59480000e7

const oddOrEven = (array) => {
  return array.reduce((total, current) => total + current, 0) % 2
    ? 'odd'
    : 'even'
}

oddOrEven([0]) // -> 'even'
oddOrEven([1]) // -> 'odd'
oddOrEven([]) // -> 'even'
oddOrEven([0, 1, 5]) // -> 'even'
oddOrEven([0, 1, 3]) // -> 'even'
oddOrEven([1023, 1, 2]) // -> 'even'
oddOrEven([0, -1, -5]) // -> 'even'
oddOrEven([0, -1, -3]) // -> 'even'
oddOrEven([-1023, 1, -2]) // -> 'even'
oddOrEven([0, 1, 2]) // -> 'odd'
oddOrEven([0, 1, 4]) // -> 'odd'
oddOrEven([1023, 1, 3]) // -> 'odd'
oddOrEven([0, -1, 2]) // -> 'odd'
oddOrEven([0, 1, -4]) // -> 'odd'
oddOrEven([-1023, -1, 3]) // -> 'odd'
