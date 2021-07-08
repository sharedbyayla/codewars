// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

const number = (busStops) => {
  return busStops.reduce((t, c) => t + c[0] - c[1], 0)
}

number([
  [10, 0],
  [3, 5],
  [5, 8],
]) // ->5
number([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]) // ->17
number([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
]) // ->21
