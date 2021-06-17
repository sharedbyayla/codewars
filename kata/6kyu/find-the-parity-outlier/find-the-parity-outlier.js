// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

const findOutlier = (integers) => {
  const evens = integers.filter((num) => num % 2 === 0)
  const odds = integers.filter((num) => num % 2 !== 0)

  if (evens.length < odds.length) return integers[integers.indexOf(evens[0])]
  else return integers[integers.indexOf(odds[0])]
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) // -> 11
findOutlier([160, 3, 1719, 19, 11, 13, -21]) // -> 160
