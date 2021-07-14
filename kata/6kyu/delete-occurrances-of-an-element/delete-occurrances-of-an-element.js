// https://www.codewars.com/kata/554ca54ffa7d91b236000023

const deleteNth = (arr, n) => {
  const count = {}

  return arr
    .map((num) => {
      if (!count[num]) count[num] = 1

      if (count[num] && count[num] <= n) {
        count[num]++
        return num
      }
    })
    .filter((val) => val !== undefined)
}

deleteNth([1, 1, 1, 1], 2) // -> [1,1]
deleteNth([20, 37, 20, 21], 1) // -> [20,37,21]
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3) // -> [1, 1, 3, 3, 7, 2, 2, 2]
