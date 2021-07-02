// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

const solution = (nums) => {
  return nums ? nums.sort((x, y) => x - y) : []
}

solution([1, 2, 3, 10, 5]) // -> [1,2,3,5,10]
solution(null) // -> []
solution([]) // -> []
solution([20, 2, 10]) // -> [2,10,20]
solution([2, 20, 10]) // -> [2,10,20]
