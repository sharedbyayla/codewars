// https://www.codewars.com/kata/54da5a58ea159efa38000836

const findOdd = (A) => {
  let output

  A.forEach((num) => {
    if (A.filter((val) => val === num).length % 2 !== 0) {
      output = num
    }
  })

  return output
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) // -> 5
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) // -1
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) // -> 5
findOdd([10]) // -> 10
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]) // -> 10
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]) // -> 1
