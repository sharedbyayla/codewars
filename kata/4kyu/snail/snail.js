// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

const snail = (array) => {
  const output = []

  const evaluate = (arr) => {
    // if there's more than on subArray
    if (arr.length > 1) {
      // get all top row values
      output.push(...arr.shift())

      // get all last column values
      arr.forEach((subArr) => {
        output.push(subArr.pop())
      })

      // get all bottom row values
      output.push(...arr.pop().reverse())

      // get all first column values
      const firstColumn = []
      arr.forEach((subArr) => {
        firstColumn.push(subArr.shift())
      })
      output.push(...firstColumn.reverse())

      // repeat
      evaluate(arr)
    } else {
      // add the final row of values, if there are any
      if (arr[0] && arr[0].length > 0) {
        output.push(...arr[0])
      }
    }
  }

  evaluate(array)
  return output
}

snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]) // -> [1,2,3,6,9,8,7,4,5]
snail([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]) // -> [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
