// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

const findMissingLetter = (array) => {
  array = array.map((letter, i) => (letter = letter.charCodeAt(letter)))

  for (let i = array[0]; i < array[array.length - 1]; i++) {
    if (!array.includes(i)) return String.fromCharCode(i)
  }
}

findMissingLetter(['a', 'b', 'c', 'd', 'f']) // -> "e"
findMissingLetter(['O', 'Q', 'R', 'S']) // -> "P"
