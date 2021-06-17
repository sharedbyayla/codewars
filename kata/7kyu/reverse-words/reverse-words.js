// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

const reverseWords = (str) => {
  const words = str.split(' ')
  words.map((word, i) => (words[i] = word.split('').reverse().join('')))

  return words.join(' ')
}

reverseWords('This is an example!') // -> "sihT si na !elpmaxe"
reverseWords('double  spaces') // -> "elbuod  secaps"
