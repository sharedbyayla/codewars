// https://www.codewars.com/kata/520b9d2ad5c005041100000f

const pigIt = (str) => {
  return str
    .split(' ')
    .map((word) =>
      !word.match(/[a-z]/gi)
        ? word
        : (word = word.substring(1) + word.substring(0, 1) + 'ay')
    )
    .join(' ')
}
pigIt('Pig latin is cool') // -> 'igPay atinlay siay oolcay'
pigIt('Hello world !') // -> 'elloHay orldway !'
pigIt('Pig latin is cool') // -> 'igPay atinlay siay oolcay'
pigIt('This is my string') // -> 'hisTay siay ymay tringsay'
