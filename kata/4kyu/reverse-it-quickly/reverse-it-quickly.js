// https://www.codewars.com/kata/59ae589c07157afba80000a7
// goal code length <= 28

weirdReverse = (a) => a.map((n, i) => a.length - i) // 40 chars

weirdReverse([1, 2, 3, 4, 5]) // -> [5,4,3,2,1]
