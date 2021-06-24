// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2) {
  array1 = !array1 ? 'null' : array1.sort().join('')
  array2 = !array2
    ? 'null'
    : array2
        .map((val) => Math.sqrt(val))
        .sort()
        .join('')

  return array1 === array2
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
const a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
]
comp(a1, a2) // -> true
