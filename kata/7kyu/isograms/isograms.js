// https://www.codewars.com/kata/54ba84be607a92aa900000f1
const isIsogram = (str) => {
  str = str.toLowerCase().split('')
  let duplicates = {}
  let output = true

  str.forEach((letter, i) => {
    if (Object.keys(duplicates).includes(letter)) output = false
    else duplicates[letter] = 1
  })

  return output
}

isIsogram('Dermatoglyphics') // -> true
isIsogram('aba') // -> false
isIsogram('moOse') // -> false // -- ignore letter case
