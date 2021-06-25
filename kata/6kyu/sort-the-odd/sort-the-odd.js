// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

const sortArray = (array) => {
  const sortedOdds = array.filter((val) => val % 2 !== 0).sort((a, b) => a - b)
  const evens = array.filter((val) => val % 2 === 0)

  array = array.map((val) => (val % 2 === 0 ? (val = true) : (val = false)))
  array = array.map((val) =>
    val ? (val = evens.shift()) : (val = sortedOdds.shift())
  )

  return array
}

sortArray([7, 1]) // ->  [1, 7]
sortArray([5, 8, 6, 3, 4]) // ->  [3, 8, 6, 5, 4]
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) // ->  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]) // ->  [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]) // ->  [1, 3, 5, 8, 0]
sortArray([]) // -> []
