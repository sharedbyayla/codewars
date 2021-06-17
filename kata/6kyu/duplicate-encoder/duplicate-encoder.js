// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

const duplicateEncode = (word) => {
  let letters = word.toLowerCase().split('')

  return letters
    .map((val) => {
      let filtered = letters.filter((letter) => letter === val)
      return filtered.length > 1 ? ')' : '('
    })
    .join('')
}

duplicateEncode('din') // -> "((("
duplicateEncode('recede') // -> "()()()"
duplicateEncode('Success') // -> ")())())" should ignore case
duplicateEncode('(( @') // -> "))(("
