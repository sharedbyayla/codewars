// https://www.codewars.com/kata/574b3b1599d8f897470018f6

const getRealFloor = (n) => {
  return n < 1 ? n : n > 12 ? n - 2 : n - 1
}

getRealFloor(1) // -> 0
getRealFloor(5) // -> 4
getRealFloor(15) // -> 13  