// https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = (iterable) => {
  if (typeof iterable === 'string') iterable = iterable.split('')
  return iterable.filter((val, i) => val !== iterable[i - 1])
}

uniqueInOrder('AAAABBBCCDAABBB') // -> ['A','B','C','D','A','B']
uniqueInOrder('ABBCcAD') // -> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]) // -> [1,2,3]
