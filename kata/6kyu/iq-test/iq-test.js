// https://www.codewars.com/kata/552c028c030765286c00007d

const iqTest = (numbers) => {
  const nums = numbers.split(' ')
  const evens = nums.filter((num) => parseInt(num) % 2 === 0)
  const odds = nums.filter((num) => parseInt(num) % 2 !== 0)

  if (evens.length < odds.length) return nums.indexOf(evens[0]) + 1
  return nums.indexOf(odds[0]) + 1
}

iqTest('2 4 7 8 10') // -> 3
iqTest('1 2 1 1') // -> 2
