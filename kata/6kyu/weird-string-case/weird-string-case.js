// https://www.codewars.com/kata/52b757663a95b11b3d00062d

const toWeirdCase = (string) => {
  let words = string.split(' ')
  let weird = ''

  words.forEach((word, i) => {
    word = word.split('')

    word.forEach((letter, idx) => {
      if (idx % 2 === 0) weird += letter.toUpperCase()
      else weird += letter.toLowerCase()
    })

    weird += ' '
  })

  return weird.trim()
}

toWeirdCase('String') // -> returns "StRiNg"
toWeirdCase('Weird string case') // -> returns "WeIrD StRiNg CaSe"
